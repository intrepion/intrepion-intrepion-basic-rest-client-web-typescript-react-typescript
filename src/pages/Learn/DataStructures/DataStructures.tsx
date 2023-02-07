import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const DataStructures = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Data Structures</h1>
          <p className="col-md-8 fs-4">
            Data structures are structures used to organize and store data in a
            computer so that it can be accessed and used efficiently.
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
              <Breadcrumb.Item active>Data Structures</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Arrays</h2>
              <p>Collection of items stored at contiguous memory locations.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Linked List</h2>
              <p>
                Collection of items where each item holds a reference to the
                next item.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Stack</h2>
              <p>Collection of items with last-in-first-out (LIFO) order.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Queue</h2>
              <p>Collection of items with first-in-first-out (FIFO) order.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Tree</h2>
              <p>Collection of items organized in a hierarchical structure.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Graph</h2>
              <p>
                Collection of items represented as nodes connected by edges.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Hash Table</h2>
              <p>
                Data structure that implements an associative array, a structure
                that can map keys to values.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Heap</h2>
              <p>
                Complete binary tree where items are stored in a special order
                such that the parent node is always larger/smaller than its
                child nodes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Trie</h2>
              <p>
                Tree-like data structure used for efficient retrieval of data in
                which keys are sequences.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Matrix</h2>
              <p>2D array used to represent and manipulate numerical data.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataStructures;
