import React from "react";
import ErrorBoundary from "../ErrorBoundary";

const withErrorBoundary = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <div className="main-container">
          <ErrorBoundary>
            <WrappedComponent {...this.props} />
          </ErrorBoundary>
        </div>
      );
    }
  };
};

export default withErrorBoundary;
