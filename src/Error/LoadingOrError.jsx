import React from "react";

function LoadingOrError(props) {
  const { error } = props;
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-xl" data-testid="LoadingOrError">
        {error ? error.message : "Loading..."}
      </h1>
    </div>
  );
}

LoadingOrError.defaultProps = {
  error: undefined,
};

export default LoadingOrError;
