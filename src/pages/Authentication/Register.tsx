import { isAxiosError } from "axios";
import { ChangeEvent, useState } from "react";
import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { userNew } from "../../api/user";

const Register = () => {
  const [accept, setAccept] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [registerHandling, setRegisterHandling] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [userName, setUserName] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChangeAccept = (event: ChangeEvent<HTMLInputElement>) => {
    setAccept(event.target.checked);
  };

  const handleChangeConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirm(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleRegister = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    setRegisterError("");
    setRegisterSuccess(false);
    const form = event.currentTarget;
    const valid = form.checkValidity();
    setValidated(true);
    if (valid === false) {
      return;
    }
    setRegisterHandling(true);
    try {
      const response = await userNew(
        accept,
        confirm,
        email,
        password,
        userName
      );
      if (response.data) {
        setRegisterSuccess(true);
      } else {
        setRegisterError("Register failed.");
        setRegisterSuccess(false);
      }
    } catch (error) {
      let message;
      if (isAxiosError(error) && error.response) {
        message = "Register failed.";
      } else message = String(error);
      setRegisterError(message);
      setRegisterSuccess(false);
    }
    setRegisterHandling(false);
  };

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Register</h1>
          <p className="col-md-8 fs-4">Please register.</p>
        </div>
      </div>
      <div>
        <Form noValidate validated={validated} onSubmit={handleRegister}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="register-user-name">
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
            <Form.Group as={Col} md="4" controlId="register-email">
              <Form.Label>Email</Form.Label>
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
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="register-password">
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
            <Form.Group as={Col} md="4" controlId="register-confirm">
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
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="register-accept">
              <Form.Check
                checked={accept}
                label="Accept terms of service"
                onChange={handleChangeAccept}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please accept the terms of service.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col md="4">
              <Button
                disabled={registerHandling}
                id="register-submit"
                type="submit"
              >
                Login
              </Button>
            </Col>
          </Row>
          {!registerSuccess && registerError && (
            <Row>
              <Col md="4">
                <Alert variant="danger">{registerError}</Alert>
              </Col>
            </Row>
          )}
        </Form>
      </div>
      {registerSuccess && (
        <Navigate to="/authentication/log-in" replace={true} />
      )}
    </>
  );
};

export default Register;
