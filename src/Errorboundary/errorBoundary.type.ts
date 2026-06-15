import type { PropsWithChildren } from "react";

export type ErrorFallbackProps = {
  error: Error;
  onRetry?: () => void;
};

export interface ErrorBoundaryProps extends PropsWithChildren {
  fallback: React.ComponentType<ErrorFallbackProps>;
  max_retries: number;
}

export type ErrorBoundaryState = {
  hasError: boolean;
  error: null | Error;
  retries: number;
};
