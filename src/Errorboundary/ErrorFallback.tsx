import Button from "../component/Button/Button";
import type { ErrorFallbackProps } from "./errorBoundary.type";

export default function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  console.log("Error Boundary called");

  return (
    <div className="h-full w-full flex flex-col items-center">
      <p>Something went wrong : {error.message}</p>
      <div>
        <Button mode="Primary" title="Retry" onClick={onRetry} />
      </div>
    </div>
  );
}
