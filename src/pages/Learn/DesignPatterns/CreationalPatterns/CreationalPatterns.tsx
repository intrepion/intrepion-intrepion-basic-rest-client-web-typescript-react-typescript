import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreationalPatterns = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Creational Patterns</h1>
          <p className="col-md-8 fs-4">
            These patterns are focused on object creation mechanisms, trying to
            create objects in a manner suitable to the situation.
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
              <Breadcrumb.Item active>Creational Patterns</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Factory Method</h2>
              <p>
                This pattern defines an interface for creating an object, but
                allows subclasses to alter the type of objects that will be
                created.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Abstract Factory</h2>
              <p>
                This pattern provides an interface for creating families of
                related or dependent objects without specifying their concrete
                classes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Builder</h2>
              <p>
                This pattern separates the construction of a complex object from
                its representation, allowing the same construction process to
                create various representations.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Prototype</h2>
              <p>
                This pattern specifies the kind of objects to create using a
                prototypical instance, and creates new objects by copying this
                prototype.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Singleton</h2>
              <p>
                This pattern ensures that a class has only one instance, while
                providing a global access point to this instance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationalPatterns;
