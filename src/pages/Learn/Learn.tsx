import { Breadcrumb, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <>
      <div className="p-5 mb-1 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Let's Learn</h1>
          <p className="col-md-8 fs-4">
            Use these series of lessons for learning the fundamentals of
            Computer Science. We'll go through the basics of programming, data
            structures, and algorithms. We'll also go through the best practices
            for software development, including SOLID priciples and Test-Driven
            Development.
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
              <Breadcrumb.Item active>Learn</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Data Structures</h2>
              <p>
                Data structures are structures used to organize and store data
                in a computer so that it can be accessed and used efficiently.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-data-structures"
                to="/learn/data-structures"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Algorithms</h2>
              <p>
                An algorithm is a set of steps to solve a specific problem. In
                computer science, algorithms are used to process data, sort and
                search information, and make decisions.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-algorithms"
                to="/learn/algorithms"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Design Patterns</h2>
              <p>
                Learn about design patterns such as creational patterns
                (Singleton, Builder, and Factory), behavioral patterns (Iterator
                and Observer), and structural patterns (Decorator).
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-design-patterns"
                to="/learn/design-patterns"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Principles</h2>
              <p>Learn about principles like SOLID.</p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-principles"
                to="/learn/principles"
                type="button"
              >
                Learn
              </Nav.Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Best Practices</h2>
              <p>Learn about best practices like Test-Driven Development.</p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-best-practices"
                to="/learn/best-practices"
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

export default Learn;
