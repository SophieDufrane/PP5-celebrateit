import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import MoreDropdown from "../../components/MoreDropdown";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import styles from "../../styles/PostCard.module.css";
import PostLayoutShell from "../../components/PostLayoutShell";

// NominationCard: Displays a nomination post with edit/delete options if owned
function NominationCard(props) {
  const {
    id,
    title,
    content,
    user, // The username string used to check ownership (for dropdown)
    username, // Used only for fallback avatar initials
    first_name, // Used for fallback avatar initials
    last_name, // Used for fallback avatar initials
    display_name, // The public full name shown next to avatar
    profile_image,
    profile_id,
    nominee_profile_id,
    created_at,
    nominee_display_name: nominee,
    tag,
    tag_color,
    onPostDelete,
    detailUrl = `/nominations/${id}`,
    editUrl = `/nominations/${id}/edit`,
    deleteUrl = `/nominations/${id}/`,
  } = props;

  // Auth and navigation
  const { currentUserLoaded } = useCurrentUser();
  const history = useHistory();

  // Local UI State
  const [showConfirm, setShowConfirm] = useState(false);

  // Avoid rendering before auth loads
  if (!currentUserLoaded) return null;

  // Truncate content for preview
  const truncatedContent =
    content.length > 150
      ? `${content.slice(0, content.slice(0, 150).lastIndexOf(" "))}...`
      : content;

  // Handlers
  const handleDelete = () => setShowConfirm(true);

  const confirmDelete = async () => {
    try {
      await axiosReq.delete(deleteUrl);
      if (onPostDelete) {
        onPostDelete(id);
      }
      history.push("/?deleted=true");
    } catch (err) {
      // TODO: add user feedback on error
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <>
      <PostLayoutShell
        title={title}
        content={truncatedContent}
        user={user}
        username={username}
        first_name={first_name}
        last_name={last_name}
        display_name={display_name}
        profile_image={profile_image}
        profile_id={profile_id}
        nominee_profile_id={nominee_profile_id}
        created_at={created_at}
        renderDropdown={
          props.is_user && (
            <MoreDropdown
              handleEdit={() => history.push(editUrl)}
              handleDelete={handleDelete}
            />
          )
        }
        metaTop={
          nominee &&
          tag && (
            <p className={styles.NominationMeta}>
              {nominee_profile_id ? (
                <Link
                  to={`/profiles/${nominee_profile_id}`}
                  className={styles.InteractiveNameLink}
                >
                  <strong>{nominee}</strong>
                </Link>
              ) : (
                <strong>{nominee}</strong>
              )}{" "}
              was nominated by <strong>{display_name}</strong>{" "}
              <span
                className={styles.Tag}
                style={{ backgroundColor: tag_color }}
              >
                {tag}
              </span>
            </p>
          )
        }
        extraContent={
          <Link to={detailUrl} className={styles.InteractiveTextLink}>
            View full nomination
          </Link>
        }
      />

      <ConfirmDeleteModal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
}

export default NominationCard;
