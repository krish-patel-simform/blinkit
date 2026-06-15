import { Link } from "react-router";

export default function Success() {
  return (
    <div>
      <h1>Payment Success</h1>
      <Link to={'/'}>Go to home</Link>
    </div>
  )
}
