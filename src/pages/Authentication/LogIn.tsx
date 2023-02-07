import { isAxiosError } from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { logInNew } from "../../api/logIn";
import { AuthContext } from "../../AuthProvider";

const LogIn = () => {
  const { authenticatedUserName, setAuthenticatedUserName } =
    useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const [logInHandling, setLogInHandling] = useState(false);
  const [logInSuccess, setLogInSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userName, setUserName] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeRememberMe = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleLogIn = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    setLogInError("");
    setLogInSuccess(false);
    const form = event.currentTarget;
    const valid = form.checkValidity();
    setValidated(true);
    if (valid === false) {
      return;
    }
    setLogInHandling(true);
    try {
      const response = await logInNew(password, rememberMe, userName);
      if (response.data) {
        const { userName } = response.data;
        setAuthenticatedUserName(userName);
        setLogInSuccess(true);
      } else {
        setLogInError("Log in failed.");
        setLogInSuccess(false);
      }
    } catch (error) {
      let message;
      if (isAxiosError(error) && error.response) {
        message = "Log in failed.";
      } else message = String(error);
      setLogInError(message);
      setLogInSuccess(false);
    }
    setLogInHandling(false);
  };

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Log In</h1>
          <p className="col-md-8 fs-4">Please log in.</p>
        </div>
      </div>
      <div>
        <Form noValidate validated={validated} onSubmit={handleLogIn}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="log-in-user-name">
              <Form.Label>User Name</Form.Label>
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
                <Form.Control.Feedback type="invalid">
                  Please provide a valid user name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="log-in-password">
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
            <Form.Group as={Col} md="4" controlId="log-in-remember-me">
              <Form.Check
                checked={rememberMe}
                label="Remember Me"
                onChange={handleChangeRememberMe}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col md="4">
              <Button disabled={logInHandling} id="log-in-submit" type="submit">
                Login
              </Button>
            </Col>
          </Row>
          {!logInSuccess && logInError && (
            <Row>
              <Col md="4">
                <Alert variant="danger">{logInError}</Alert>
              </Col>
            </Row>
          )}
        </Form>
      </div>
      {authenticatedUserName && <Navigate to="/" replace={true} />}
    </>
  );
};

export default LogIn;
