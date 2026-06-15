import React from "react";
import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "./errorBoundary.type";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      hasError: false,
      retries: 0,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error.message);
    console.error(errorInfo.componentStack);
  }

  handleRetry = () => {
    this.setState((prev) => {
      if (this.state.retries >= this.props.max_retries) {
        return null;
      }
      return {
        error: null,
        retries: prev.retries + 1,
        hasError: false,
      };
    });
  };

  render(): React.ReactNode {
    const { error, hasError, retries } = this.state;
    const { fallback: Fallback, children } = this.props;

    if (hasError && error instanceof Error) {
      return <Fallback error={error} onRetry={this.handleRetry} />;
    }

    return <div key={retries}>{children}</div>;
  }
}

export default ErrorBoundary;
