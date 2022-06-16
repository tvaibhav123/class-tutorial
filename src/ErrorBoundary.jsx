import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

const ErrorBoundary = withErrorBoundary(({ children }) => {
  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    //(error, errorInfo) => logErrorToMyService(error, errorInfo)
  );

  if (error) {
    return (
      <div className="text-center">
        <h2 className="text-danger"> Oops, Something Went Wrong.</h2>
        <h4>please try again after sometime.</h4>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  return <div>{children}</div>;
});
export default ErrorBoundary;