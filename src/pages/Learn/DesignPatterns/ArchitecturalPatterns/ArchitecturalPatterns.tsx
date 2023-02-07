import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArchitecturalPatterns = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Architectural Patterns</h1>
          <p className="col-md-8 fs-4">
            These patterns are focused on overall software architecture, and
            high-level structural organization of code.
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
              <Breadcrumb.Item active>Architectural Patterns</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Model-View-Controller (MVC)</h2>
              <p>
                This pattern separates the representation of information from
                the user's interaction with it
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Model-View-ViewModel (MVVM)</h2>
              <p>
                This pattern is similar to MVC, but it specifically targets
                UI-based applications and it is used to separate the business
                and presentation logic of an application from its user
                interface.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Client-Server</h2>
              <p>
                This pattern separates the user interface concerns from the data
                storage concerns, by using a client to interact with a remote
                server.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Microservices</h2>
              <p>
                This pattern structures an application as a collection of small,
                loosely coupled services, each of which can be developed,
                deployed, and scaled independently.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Event-Driven</h2>
              <p>
                This pattern allows different parts of an application to
                communicate asynchronously, by sending and receiving events.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Layered</h2>
              <p>
                This pattern organizes an application into layers, each of which
                has a specific responsibility, such as presentation, business
                logic, and data access.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Space-Based</h2>
              <p>
                This pattern organizes the components of an application around a
                shared space, such as a database, message queue, or shared
                memory.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Hexagonal</h2>
              <p>
                This pattern allows an application to be built around the
                business logic, independent of the user interface and
                infrastructure concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchitecturalPatterns;
