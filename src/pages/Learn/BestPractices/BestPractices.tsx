import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BestPractices = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Best Practices</h1>
          <p className="col-md-8 fs-4">
            Learn about best practices like Test-Driven Development.
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
              <Breadcrumb.Item active>Best Practices</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Test-Driven Development</h2>
              <p>
                A software development process relying on software requirements
                being converted to test cases before software is fully
                developed, and tracking all software development by repeatedly
                testing the software against all test cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPractices;
