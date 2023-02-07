import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const Algorithms = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Algorithms</h1>
          <p className="col-md-8 fs-4">
            An algorithm is a set of steps to solve a specific problem. In
            computer science, algorithms are used to process data, sort and
            search information, and make decisions.
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
              <Breadcrumb.Item active>Algorithms</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Sorting Algorithms</h2>
              <p>
                Sorting Algorithms are used to arrange data in a specific order,
                such as bubble sort, insertion sort, and merge sort.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Search Algorithms</h2>
              <p>
                Search Algorithms are used to find an item in a dataset, such as
                linear search and binary search.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Graph Algorithms</h2>
              <p>
                Graph Algorithms are used to process and analyze graph data
                structures, such as breadth-first search and Dijkstra's shortest
                path.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Dynamic Programming Algorithms</h2>
              <p>
                Dynamic Programming Algorithms are used to solve problems by
                breaking them down into smaller subproblems, such as the
                Fibonacci sequence and the knapsack problem.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Divide and Conquer Algorithms</h2>
              <p>
                Divide and Conquer Algorithms are used to solve problems by
                dividing the problem into smaller subproblems and solving each
                subproblem, such as quick sort and merge sort.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Greedy Algorithms</h2>
              <p>
                Greedy Algorithms are used to make locally optimal choices at
                each stage with the hope of finding a global optimum, such as
                the activity selection problem and Kruskal's minimum spanning
                tree.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Backtracking Algorithms</h2>
              <p>
                Backtracking Algorithms are used to find all possible solutions
                by incrementally building and testing candidate solutions, such
                as the n-queens problem and the traveling salesman problem.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Algorithms;
