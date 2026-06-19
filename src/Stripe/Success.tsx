import CheckCircle from "reicon-react/icons/CheckCircle";
import { Link } from "react-router";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8! w-100 text-center">
        <CheckCircle size={80} className="mx-auto text-green-600 mb-4" />

        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful
        </h1>

        <p className="text-gray-600 mt-2">
          Your order has been placed successfully.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
