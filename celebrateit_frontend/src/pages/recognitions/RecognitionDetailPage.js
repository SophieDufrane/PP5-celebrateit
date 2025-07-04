import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import { Container, Alert, OverlayTrigger, Tooltip } from "react-bootstrap";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import PostLayoutShell from "../../components/PostLayoutShell";
import MoreDropdown from "../../components/MoreDropdown";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import CommentForm from "../comment/CommentForm";
import Comment from "../comment/Comment";
import CommentEditForm from "../comment/CommentEditForm";
import styles from "../../styles/PostCard.module.css";
import commentStyles from "../../styles/Comment.module.css";
import LoadingIndicator from "../../components/LoadingIndicator";

// RecognitionDetailPage: Display a single recognition detail with edit/delete functionality
function RecognitionDetailPage() {
  // Route params, navigation and Context hooks
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { currentUser } = useCurrentUser();

  // State variables
  const [recognition, setRecognition] = useState(null);
  const [comments, setComments] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showCommentSuccess, setShowCommentSuccess] = useState(false);
  const [editingComment, setEditingComment] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  // Parse URL query params for success alerts
  const searchParams = new URLSearchParams(location.search);
  const isCreated = searchParams.get("created") === "true";
  const isUpdated = searchParams.get("updated") === "true";
  const commentEdited = searchParams.get("comment_edited") === "true";
  const commentDeleted = searchParams.get("comment_deleted") === "true";

  // Determine if any success alert should be shown
  const showSuccess =
    isCreated ||
    isUpdated ||
    commentEdited ||
    commentDeleted ||
    showCommentSuccess;

  // Determine which success message to show
  const successMessage = isCreated
    ? "Your recognition has been published!"
    : isUpdated
    ? "Your recognition has been updated!"
    : commentEdited
    ? "Comment updated successfully!"
    : commentDeleted
    ? "Comment deleted successfully!"
    : showCommentSuccess
    ? "Comment posted successfully!"
    : "";

  // Handlers
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", {
        post: recognition.id,
      });
      setRecognition((prev) => ({
        ...prev,
        likes_count: prev.likes_count + 1,
        like_id: data.id,
      }));
    } catch (err) {
      // TODO: add user feedback on error
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${recognition.like_id}/`);
      setRecognition((prev) => ({
        ...prev,
        likes_count: prev.likes_count - 1,
        like_id: null,
      }));
    } catch (err) {
      // TODO: add user feedback on error
    }
  };

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await axiosReq.delete(`/posts/${recognition.id}/`);
      history.push("/?deleted=true");
    } catch (err) {
      // TODO: add user feedback on error
    } finally {
      setShowConfirm(false);
    }
  };

  const confirmDeleteComment = async () => {
    try {
      await axiosReq.delete(`/comments/${showDeleteModal}/`);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== showDeleteModal)
      );
      setRecognition((prev) => ({
        ...prev,
        comments_count: prev.comments_count - 1,
      }));
      history.replace(`${location.pathname}?comment_deleted=true`);
    } catch (err) {
      // TODO: add user feedback on error
    } finally {
      setShowDeleteModal(null);
    }
  };

  // Clear success alert after 4 seconds and clean URL
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowCommentSuccess(false);
        history.replace(location.pathname);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, history, location.pathname]);

  // Fetch recognition data on mount or id change
  useEffect(() => {
    axiosReq
      .get(`/posts/${id}/`)
      .then((response) => {
        setRecognition(response.data);
      })
      .catch((error) => {
        // TODO: add user feedback on error
      });
  }, [id]);

  // Fetch comments for this post and update on id or currentUser changes
  useEffect(() => {
    axiosReq
      .get(`/comments/?post=${id}`)
      .then((response) => {
        setComments(response.data.results || response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id, currentUser]);

  // Show loading indicator while fetching
  if (!recognition) {
    return (
      <Container className="d-flex justify-content-center py-5">
        <LoadingIndicator message="Loading recognition..." />
      </Container>
    );
  }

  // Dropdown menu for edit/delete if user owns nomination
  const dropdownMenu = recognition.is_user ? (
    <MoreDropdown
      handleEdit={() => history.push(`/recognitions/${recognition.id}/edit`)}
      handleDelete={handleDelete}
    />
  ) : null;

  // Footer section with likes and comments
  const postActions = (
    <div className={styles.PostFooter}>
      <div className={styles.ActionItem}>
        {recognition.is_user ? (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-self-like">
                Can't like your own recognition!
              </Tooltip>
            }
          >
            <span
              style={{ cursor: "not-allowed" }}
              aria-label="You can't like your own recognition"
            >
              <i className="far fa-thumbs-up" />
            </span>
          </OverlayTrigger>
        ) : recognition.like_id ? (
          <span
            onClick={handleUnlike}
            style={{ cursor: "pointer" }}
            aria-label="Unlike this recognition"
          >
            <i className={`fas fa-thumbs-up ${styles.Heart}`} />
          </span>
        ) : currentUser ? (
          <span
            onClick={handleLike}
            style={{ cursor: "pointer" }}
            aria-label="Like this recognition"
          >
            <i className={`far fa-thumbs-up ${styles.HeartOutline}`} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-login-like-${recognition.id}`}>
                Log in to like recognitions!
              </Tooltip>
            }
          >
            <span
              className={styles.DisabledIcon}
              aria-label="Log in to like this recognition"
              role="button"
              aria-disabled="true"
            >
              <i className="far fa-thumbs-up" />
            </span>
          </OverlayTrigger>
        )}
        <span>{recognition.likes_count}</span>
      </div>
      <div className={styles.ActionItem}>
        <i className="far fa-comment" />
        <span>{recognition.comments_count}</span>
      </div>
    </div>
  );

  return (
    <Container>
      {showSuccess && successMessage && (
        <Alert variant="success" dismissible>
          {successMessage}
        </Alert>
      )}

      <PostLayoutShell
        title={recognition.title}
        content={recognition.content}
        image={recognition.image}
        user={recognition.user}
        username={recognition.username}
        first_name={recognition.first_name}
        last_name={recognition.last_name}
        display_name={recognition.display_name}
        profile_image={recognition.profile_image}
        profile_id={recognition.profile_id}
        created_at={recognition.created_at}
        likes_count={recognition.likes_count}
        comments_count={recognition.comments_count}
        renderDropdown={dropdownMenu}
        postActions={postActions}
      >
        <>
          {/* Recognition image */}
          {recognition.image && (
            <div className={styles.ImageWrapper}>
              <img
                src={recognition.image}
                alt={recognition.title}
                className={styles.PostImage}
              />
            </div>
          )}

          {/* Comment form or login prompt */}
          {currentUser ? (
            <CommentForm
              postId={recognition.id}
              onCommentSubmit={(newComment) => {
                setComments((prevComments) => [newComment, ...prevComments]);
                setRecognition((prev) => ({
                  ...prev,
                  comments_count: prev.comments_count + 1,
                }));
                setShowCommentSuccess(true);
              }}
            />
          ) : (
            <p className={styles.LoginToComment}>
              <i className="far fa-comment" />
              <Link to="/login" className={styles.InteractiveTextLink}>
                Log in
              </Link>
              to leave a comment.
            </p>
          )}

          {/* Comments list */}
          <div className={commentStyles.CommentSection} />
          {comments.length ? (
            comments.map((comment) =>
              editingComment?.id === comment.id ? (
                <div key={comment.id} className={styles.CommentBlock}>
                  <CommentEditForm
                    comment={comment}
                    postId={recognition.id}
                    setComments={setComments}
                    setEditingComment={setEditingComment}
                    onCancel={() => setEditingComment(null)}
                  />
                </div>
              ) : (
                <Comment
                  key={comment.id}
                  comment={comment}
                  setEditingComment={setEditingComment}
                  setShowDeleteModal={setShowDeleteModal}
                />
              )
            )
          ) : (
            <p className="text-muted px-3">No comments yet.</p>
          )}
        </>
      </PostLayoutShell>

      <ConfirmDeleteModal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        onConfirm={confirmDelete}
      />
      <ConfirmDeleteModal
        show={!!showDeleteModal}
        onHide={() => setShowDeleteModal(null)}
        onConfirm={confirmDeleteComment}
      />
    </Container>
  );
}

export default RecognitionDetailPage;
