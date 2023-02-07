import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BehavioralPatterns = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Behavioral Patterns</h1>
          <p className="col-md-8 fs-4">
            These patterns are focused on communication between objects, what
            goes on between objects and how they operate together.
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
                id="breadcrumbs-link-design-patterns"
                linkAs={Link}
                linkProps={{ to: "/learn/design-patterns" }}
              >
                Design Patterns
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Behavioral Patterns</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Chain of Responsibility</h2>
              <p>
                This pattern allows multiple objects to handle a request, by
                linking them together in a chain.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Command</h2>
              <p>
                This pattern encapsulates a request as an object, separating the
                command execution from the command initiator.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Interpreter</h2>
              <p>
                This pattern defines a language and provides an interpreter for
                it.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Iterator</h2>
              <p>
                This pattern allows sequentially accessing the elements of a
                collection, without exposing its underlying representation.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Mediator</h2>
              <p>
                This pattern allows objects to communicate without knowing each
                other's identities, by providing a mediator object to handle
                communication between them.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Memento</h2>
              <p>
                This pattern allows an object to capture its internal state and
                store it, so that it can be restored to that state later.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Observer</h2>
              <p>
                This pattern allows objects to be notified of changes to other
                objects, without being tightly coupled to them.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>State</h2>
              <p>
                This pattern allows an object to alter its behavior when its
                internal state changes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Strategy</h2>
              <p>
                This pattern allows an object to change its behavior, by
                changing the strategy or algorithm it uses.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Template Method</h2>
              <p>
                This pattern defines the skeleton of an algorithm, allowing
                subclasses to fill in the details.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Visitor</h2>
              <p>
                This pattern separates an algorithm from an object structure, by
                moving the algorithm into a separate class called a visitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BehavioralPatterns;
