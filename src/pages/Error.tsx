import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Error</h1>
          <p className="col-md-8 fs-4">
            Sorry, an unexpected error has occurred.
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
