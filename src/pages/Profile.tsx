import { isAxiosError } from "axios";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import {
  userEditEmail,
  userEditPassword,
  userEditUserName,
  userView,
} from "../api/user";
import { AuthContext } from "../AuthProvider";

const Profile = () => {
  const location = useLocation();
  const params = useParams();
  const { authenticatedUserName, setAuthenticatedUserName } =
    useContext(AuthContext);
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [emailEditing, setEmailEditing] = useState(false);
  const [emailEditingError, setEmailEditingError] = useState("");
  const [emailEditingHandling, setEmailEditingHandling] = useState(false);
  const [emailEditingSuccess, setEmailEditingSuccess] = useState(false);
  const [emailEditingValidated, setEmailEditingValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [passwordEditing, setPasswordEditing] = useState(false);
  const [passwordEditingError, setPasswordEditingError] = useState("");
  const [passwordEditingHandling, setPasswordEditingHandling] = useState(false);
  const [passwordEditingSuccess, setPasswordEditingSuccess] = useState(false);
  const [passwordEditingValidated, setPasswordEditingValidated] =
    useState(false);
  const [profileLoadError, setProfileLoadError] = useState("");
  const [profileLoadHandling, setProfileLoadHandling] = useState(false);
  const [profileLoadSuccess, setProfileLoadSuccess] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameCurrent, setUserNameCurrent] = useState(params.userName || "");
  const [userNameEditing, setUserNameEditing] = useState(false);
  const [userNameEditingError, setUserNameEditingError] = useState("");
  const [userNameEditingHandling, setUserNameEditingHandling] = useState(false);
  const [userNameEditingSuccess, setUserNameEditingSuccess] = useState(false);
  const [userNameEditingValidated, setUserNameEditingValidated] =
    useState(false);

  const handleChangeConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirm(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordCurrent = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCurrent(event.target.value);
  };

  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const userNameEditingHandle = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    setUserNameEditingError("");
    setUserNameEditingSuccess(false);
    const form = event.currentTarget;
    const valid = form.checkValidity();
    setUserNameEditingValidated(true);
    if (valid === false) {
      return;
    }
    setUserNameEditingHandling(true);
    try {
      const response = await userEditUserName(userName, userNameCurrent);
      if (response.data) {
        if (userNameCurrent === authenticatedUserName) {
          setAuthenticatedUserName(response.data.userName);
        }
        setUserName(response.data.userName);
        setUserNameCurrent(response.data.userName);
        setUserNameEditing(false);
        setUserNameEditingSuccess(true);
      } else {
        setUserNameEditingError("User name edit failed.");
        setUserNameEditingSuccess(false);
      }
    } catch (error) {
      let message;
      if (isAxiosError(error) && error.response) {
        message = "User name edit failed.";
      } else message = String(error);
      setUserNameEditingError(message);
      setUserNameEditingSuccess(false);
    }
    setUserNameEditingHandling(false);
  };

  const emailEditingHandle = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    setEmailEditingError("");
    setEmailEditingSuccess(false);
    const form = event.currentTarget;
    const valid = form.checkValidity();
    setEmailEditingValidated(true);
    if (valid === false) {
      return;
    }
    setEmailEditingHandling(true);
    try {
      const response = await userEditEmail(email, userNameCurrent);
      if (response.data) {
        setEmail(response.data.email);
        setEmailEditing(false);
        setEmailEditingSuccess(true);
      } else {
        setEmailEditingError("Email edit failed.");
        setEmailEditingSuccess(false);
      }
    } catch (error) {
      let message;
      if (isAxiosError(error) && error.response) {
        message = "Email edit failed.";
      } else message = String(error);
      setEmailEditingError(message);
      setEmailEditingSuccess(false);
    }
    setEmailEditingHandling(false);
  };

  const passwordEditingHandle = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    setPasswordEditingError("");
    setPasswordEditingSuccess(false);
    const form = event.currentTarget;
    const valid = form.checkValidity();
    setPasswordEditingValidated(true);
    if (valid === false) {
      return;
    }
    setPasswordEditingHandling(true);
    try {
      const response = await userEditPassword(
        confirm,
        password,
        passwordCurrent,
        userNameCurrent
      );
      if (response.data) {
        setPasswordEditing(false);
        setPasswordEditingSuccess(true);
      } else {
        setPasswordEditingError("Password edit failed.");
        setPasswordEditingSuccess(false);
      }
    } catch (error) {
      let message;
      if (isAxiosError(error) && error.response) {
        message = "Password edit failed.";
      } else message = String(error);
      setPasswordEditingError(message);
      setPasswordEditingSuccess(false);
    }
    setPasswordEditingHandling(false);
  };

  useEffect(() => {
    async function fetchData() {
      setProfileLoadError("");
      setProfileLoadHandling(true);
      setProfileLoadSuccess(false);
      try {
        const userNameLocation = location.pathname.split("/")[2];
        const response = await userView(userNameLocation);
        if (response.data) {
          setEmail(response.data.email);
          setProfileLoadSuccess(true);
          setUserName(response.data.userName);
          setUserNameCurrent(response.data.userName);
        } else {
          setProfileLoadSuccess(false);
        }
      } catch (error) {
        let message;
        if (isAxiosError(error) && error.response) {
          message = "Profile load failed.";
        } else message = String(error);
        setProfileLoadError(message);
        setProfileLoadSuccess(false);
      }
      setProfileLoadHandling(false);
    }
    fetchData();
  }, [location]);

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Profile</h1>
          <p className="col-md-8 fs-4">Profile</p>
        </div>
      </div>
      <div>
        {!profileLoadHandling && !profileLoadSuccess && profileLoadError ? (
          <Alert variant="danger">{profileLoadError}</Alert>
        ) : (
          <>
            <Form
              noValidate
              validated={userNameEditingValidated}
              onSubmit={userNameEditingHandle}
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="profile-user-name">
                  <Form.Label>User Name</Form.Label>
                  {userNameEditing ? (
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrependUserName">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        aria-describedby="inputGroupPrependUserName"
                        onChange={handleChangeUserName}
                        placeholder="User Name"
                        required
                        type="text"
                        value={userName}
                      />
                      <Button
                        disabled={userNameEditingHandling}
                        id="user-name-submit"
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid user name.
                      </Form.Control.Feedback>
                      {!userNameEditingSuccess && userNameEditingError && (
                        <Alert variant="danger">{userNameEditingError}</Alert>
                      )}
                    </InputGroup>
                  ) : (
                    <p>
                      @{userNameCurrent}{" "}
                      <Button
                        className="btn btn-secondary"
                        id="user-name-editing-toggle"
                        onClick={() => setUserNameEditing(!userNameEditing)}
                        type="button"
                      >
                        Edit
                      </Button>
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Form>
            <Form
              noValidate
              validated={emailEditingValidated}
              onSubmit={emailEditingHandle}
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="profile-email">
                  <Form.Label>Email</Form.Label>
                  {emailEditing ? (
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrependEmail">
                        mailto:
                      </InputGroup.Text>
                      <Form.Control
                        aria-describedby="inputGroupPrependEmail"
                        onChange={handleChangeEmail}
                        placeholder="Email"
                        required
                        type="email"
                        value={email}
                      />
                      <Button
                        disabled={emailEditingHandling}
                        id="user-name-submit"
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                      {!emailEditingSuccess && emailEditingError && (
                        <Alert variant="danger">{emailEditingError}</Alert>
                      )}
                    </InputGroup>
                  ) : (
                    <p>
                      {email}{" "}
                      <Button
                        className="btn btn-secondary"
                        id="email-editing-toggle"
                        onClick={() => setEmailEditing(!emailEditing)}
                        type="button"
                      >
                        Edit
                      </Button>
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Form>
            <Form
              noValidate
              validated={passwordEditingValidated}
              onSubmit={passwordEditingHandle}
            >
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="profile-password-current"
                >
                  <Form.Label>Current Password</Form.Label>
                  {passwordEditing ? (
                    <>
                      <Form.Control
                        onChange={handleChangePasswordCurrent}
                        placeholder="Password"
                        required
                        type="password"
                        value={passwordCurrent}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid current password.
                      </Form.Control.Feedback>
                    </>
                  ) : (
                    <p>
                      ********{" "}
                      <Button
                        className="btn btn-secondary"
                        id="password-editing-toggle"
                        onClick={() => setPasswordEditing(!passwordEditing)}
                        type="button"
                      >
                        Edit
                      </Button>
                    </p>
                  )}
                </Form.Group>
              </Row>
              {passwordEditing && (
                <>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="profile-password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={handleChangePassword}
                        placeholder="Password"
                        required
                        type="password"
                        value={password}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="profile-confirm">
                      <Form.Label>Confirm</Form.Label>
                      <Form.Control
                        onChange={handleChangeConfirm}
                        placeholder="Confirm"
                        required
                        type="password"
                        value={confirm}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid confirm.
                      </Form.Control.Feedback>
                      <Button
                        disabled={passwordEditingHandling}
                        id="user-name-submit"
                        type="submit"
                      >
                        Submit
                      </Button>
                      {!passwordEditingSuccess && passwordEditingError && (
                        <Alert variant="danger">{passwordEditingError}</Alert>
                      )}
                    </Form.Group>
                  </Row>
                </>
              )}
            </Form>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
