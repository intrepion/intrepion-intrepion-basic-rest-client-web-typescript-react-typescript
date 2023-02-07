import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">intrepion</h1>
          <p className="col-md-8 fs-4">
            Your resource for learning how to create software
          </p>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-md-6 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Let's Learn</h2>
              <p>
                Use these series of lessons for learning the fundamentals of
                Computer Science. We'll go through the basics of programming,
                data structures, and algorithms. We'll also go through the best
                practices for software development, including SOLID priciples
                and Test-Driven Development.
              </p>
              <Nav.Link
                as={Link}
                className="btn btn-outline-secondary"
                id="cards-link-learn"
                to="/learn"
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

export default Home;
