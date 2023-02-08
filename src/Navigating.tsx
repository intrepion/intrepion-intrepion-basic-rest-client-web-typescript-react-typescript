import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import AuthProvider, { AuthContext } from "./AuthProvider";

const Navigating = () => {
  const { authenticatedUserName } = useContext(AuthContext);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} id="navigations-link-intrepion" to="/">
            intrepion
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} id="navigations-link-home" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} id="navigations-link-learn" to="/learn">
                Learn
              </Nav.Link>
              <Nav.Link as={Link} id="navigations-link-about" to="/about">
                About
              </Nav.Link>
            </Nav>
            {/* {authenticatedUserName ? (
              <Nav className="text-end">
                <Nav.Link
                  as={Link}
                  id="navigations-link-profile"
                  to={"/profile/" + authenticatedUserName}
                >
                  {authenticatedUserName}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  id="navigations-link-log-out"
                  to="/authentication/log-out"
                >
                  Log Out
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="text-end">
                <Nav.Link
                  as={Link}
                  id="navigations-link-log-in"
                  to="/authentication/log-in"
                >
                  Log In
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  id="navigations-link-register"
                  to="/authentication/register"
                >
                  Register
                </Nav.Link>
              </Nav>
            )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="container">
        <Outlet />
      </main>
      <div className="container">
        <footer className="py-5">
          <div className="row"></div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Oliver Forral All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-dark"
                  href="https://twitter.com/intrepion"
                  id="socials-link-twitter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark"
                  href="https://www.instagram.com/intrepion/"
                  id="socials-link-instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark"
                  href="https://www.facebook.com/intrepion"
                  id="socials-link-facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

const WrappedNavigating = () => (
  <AuthProvider>
    <Navigating />
  </AuthProvider>
);

export default WrappedNavigating;
