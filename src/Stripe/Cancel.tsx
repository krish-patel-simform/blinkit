import XCircle from "reicon-react/icons/XCircle";
import { Link } from "react-router";

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px] text-center">
        <XCircle size={80} className="mx-auto text-red-600 mb-4" />

        <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>

        <p className="text-gray-600 mt-2">
          We couldn't process your payment. Please try again.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
