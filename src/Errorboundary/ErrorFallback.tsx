import Button from "../component/Button/Button";
import type { ErrorFallbackProps } from "./errorBoundary.type";

export default function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  console.log("Error Boundary called");

  return (
    <div className="h-screen w-screen flex justify-center items-start">
      <p>Something went wrong : {error.message}</p>
      <Button mode="Primary" title="Retry" onClick={onRetry} />
    </div>
  );
}
