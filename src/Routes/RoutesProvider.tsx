import { RouterProvider } from "react-router";
import { router } from "./routeConfig";

export default function RoutesProvider() {
  return <RouterProvider router={router}></RouterProvider>;
}
