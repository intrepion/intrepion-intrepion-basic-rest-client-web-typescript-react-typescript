import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const SolidPrinciples = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">SOLID Principles</h1>
          <p className="col-md-8 fs-4">
            Five design principles intended to make object-oriented designs more
            understandable, flexible, and maintainable.
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
              <Breadcrumb.Item
                id="breadcrumbs-link-principles"
                linkAs={Link}
                linkProps={{ to: "/learn/principles" }}
              >
                Principles
              </Breadcrumb.Item>
              <Breadcrumb.Item active>SOLID Principles</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Single-Responsibility Principle</h2>
              <p>
                There should never be more than one reason for a class to
                change.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Open-Closed Principle</h2>
              <p>
                Software entities should be open for extension, but closed for
                modification.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Liskov Substitution Principle</h2>
              <p>
                Linked lists are a sequence of things where a thing can be added
                to or removed from any location.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Interface Segregation Principle</h2>
              <p>
                Clients should not be forced to depend upon interfaces that they
                do not use.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Dependency Inversion Principle</h2>
              <p>Depend upon abstractions, not concretions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolidPrinciples;
