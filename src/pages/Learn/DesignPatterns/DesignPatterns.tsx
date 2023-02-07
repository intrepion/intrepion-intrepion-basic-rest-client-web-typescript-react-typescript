import { Breadcrumb, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const DesignPatterns = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Design Patterns</h1>
          <p className="col-md-8 fs-4">
            Design patterns in computer science are reusable solutions to common
            problems that arise in software development.
          </p>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-12">
            <Breadcrumb>
              <Breadcrumb.Item
                id="breadcrumbs-link-home"
                linkAs={Link}
                linkProps={{ to: "/" }}
              >
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                id="breadcrumbs-link-learn"
                linkAs={Link}
                linkProps={{ to: "/learn" }}
              >
                Learn
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Design Patterns</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Creational Patterns</h2>
              <p>
                These patterns are focused on object creation mechanisms, trying
                to create objects in a manner suitable to the situation.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-creational-patterns"
                to="/learn/design-patterns/creational-patterns"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Structural Patterns</h2>
              <p>
                These patterns deal with object composition, creating
                relationships between objects to form larger structures.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-structural-patterns"
                to="/learn/design-patterns/structural-patterns"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Behavioral Patterns</h2>
              <p>
                These patterns are focused on communication between objects,
                what goes on between objects and how they operate together.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-behavioral-patterns"
                to="/learn/design-patterns/behavioral-patterns"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Concurrency Patterns</h2>
              <p>
                These patterns are focused on managing concurrent access to
                shared resources and addressing issues that arise in concurrent
                computing.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-concurrency-patterns"
                to="/learn/design-patterns/concurrency-patterns"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Architectural Patterns</h2>
              <p>
                These patterns are focused on overall software architecture, and
                high-level structural organization of code.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-architectural-patterns"
                to="/learn/design-patterns/architectural-patterns"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPatterns;
