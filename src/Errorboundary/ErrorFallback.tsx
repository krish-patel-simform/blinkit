import Button from "../component/Button/Button";
import type { ErrorFallbackProps } from "./errorBoundary.type";

export default function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <p>Something went wrong : {error.message}</p>
      <Button mode="Primary" title="Retry" onClick={onRetry} />
    </div>
  );
}
