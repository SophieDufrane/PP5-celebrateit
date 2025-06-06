import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import FormFooter from "../../components/FormFooter";
import formStyles from "../../styles/PostForm.module.css";
import LoadingIndicator from "../../components/LoadingIndicator";

function EditProfileForm() {
  // Routing & Navigation
  const { id } = useParams();
  const history = useHistory();

  // Context
  const setCurrentUser = useSetCurrentUser();

  // Data State - Profile info
  const [profile, setProfile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [presentation, setPresentation] = useState("");

  // Data State - Image
  const [imageFile, setImageFile] = useState(null);

  // UI State
  const [hasLoaded, setHasLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch Profile on Mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq.get(`/user-profiles/${id}/`);
        setProfile(data);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setPresentation(data.presentation || "");
        setHasLoaded(true);
      } catch (err) {
        // console.error('Error fetching profile:', err);
        // TODO: add user feedback on error
      }
    };

    fetchProfile();
  }, [id]);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("presentation", presentation);
    if (imageFile && typeof imageFile !== "string") {
      formData.append("profile_image", imageFile);
    }

    // Submit to API
    try {
      const { data } = await axiosReq.patch(
        `/user-profiles/${profile.id}/`,
        formData,
        {
          // PATCH 9: Explicit token header for profile update
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProfile(data);
      setCurrentUser(
        await axiosRes.get("/dj-rest-auth/user/").then((res) => res.data)
      );
      history.push(`/profiles/${profile.id}?updated=true`);
    } catch (err) {
      setErrors(err.response?.data || {});
    }
  };

  if (!hasLoaded) {
    return (
      <Container className="d-flex justify-content-center py-5">
        <LoadingIndicator message="Loading profile..." />
      </Container>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Edit your profile</h2>
      {profile ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group
            controlId="firstName"
            className={formStyles.FormGroupSpacing}
          >
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  To update your first name, please contact your HR
                  representative
                </Tooltip>
              }
            >
              <div className={formStyles.ReadOnlyWrapper}>
                <Form.Control
                  className={formStyles.ReadOnlyInput}
                  type="text"
                  value={firstName}
                  readOnly
                  tabIndex={-1}
                  placeholder="First Name"
                  aria-label="First Name (read-only)"
                />
              </div>
            </OverlayTrigger>
          </Form.Group>
          <Form.Group
            controlId="lastName"
            className={formStyles.FormGroupSpacing}
          >
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  To update your last name, please contact your HR
                  representative
                </Tooltip>
              }
            >
              <div className={formStyles.ReadOnlyWrapper}>
                <Form.Control
                  className={formStyles.ReadOnlyInput}
                  type="text"
                  value={lastName}
                  readOnly
                  tabIndex={-1}
                  placeholder="Last Name"
                  aria-label="Last Name (read-only)"
                />
              </div>
            </OverlayTrigger>
          </Form.Group>

          <Form.Group
            controlId="presentation"
            className={formStyles.FormGroupSpacing}
          >
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Write a short bio about yourself</Tooltip>}
            >
              <Form.Control
                as="textarea"
                rows={3}
                value={presentation}
                onChange={(e) => setPresentation(e.target.value)}
                placeholder="Write something about yourself"
                aria-label="Short bio about yourself"
              />
            </OverlayTrigger>
            {Array.isArray(errors?.presentation) &&
              errors.presentation.map((msg, idx) => (
                <div key={idx} className="text-danger mt-1">
                  {msg}
                </div>
              ))}
          </Form.Group>
          <Form.Group className={formStyles.FormGroupSpacing}>
            {/* Preview current image if exists and not marked for removal */}
            {profile.profile_image && (
              <img
                src={profile.profile_image}
                alt="Current profile"
                className={formStyles.FormImagePreview}
              />
            )}
            <Form.Control
              type="file"
              name="profile_image"
              onChange={(e) => setImageFile(e.target.files[0])}
              aria-label="Upload new profile image"
            />
            {Array.isArray(errors?.profile_image) &&
              errors.profile_image.map((msg, idx) => (
                <div key={idx} className="text-danger mt-1">
                  {msg}
                </div>
              ))}
          </Form.Group>

          <FormFooter submitText="Update" onCancel={() => history.goBack()} />
        </Form>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default EditProfileForm;
