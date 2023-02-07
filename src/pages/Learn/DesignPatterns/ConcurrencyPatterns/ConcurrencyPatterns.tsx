import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConcurrencyPatterns = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Concurrency Patterns</h1>
          <p className="col-md-8 fs-4">
            These patterns are focused on managing concurrent access to shared
            resources and addressing issues that arise in concurrent computing.
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
              <Breadcrumb.Item active>Concurrency Patterns</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Active Object</h2>
              <p>
                This pattern decouples method execution from method invocation,
                allowing for the methods to be executed asynchronously.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Double-Checked Locking</h2>
              <p>
                This pattern improves the performance of lazy initialization, by
                checking the lock only once, before entering the critical
                section.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Monitor Object</h2>
              <p>
                This pattern uses an object to synchronize access to a shared
                resource, by using its methods as the critical section.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Producer-Consumer</h2>
              <p>
                This pattern divides an object into two, the producer that
                creates the data, and the consumer that acts on the data.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Thread-Pool</h2>
              <p>
                This pattern reuses a fixed number of threads to execute
                multiple tasks, rather than creating a new thread for each task.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Read-Write Lock</h2>
              <p>
                This pattern allows multiple readers to access a shared resource
                simultaneously, but only one writer at a time.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Barrier</h2>
              <p>
                This pattern is used to synchronize the execution of multiple
                threads, so that they can wait for each other to reach a
                specific point.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Future</h2>
              <p>
                This pattern allows an asynchronous computation to be executed
                and the result to be retrieved later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcurrencyPatterns;
