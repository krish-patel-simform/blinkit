import { createBrowserRouter, type RouteObject } from "react-router";
import HomePage from "../pages/HomePage";
import Main from "../component/Main/Main";
import DetailsPage from "../pages/DetailsPage";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: ":productId",
        Component: DetailsPage,
      },
    ],
  },
];

export const router = createBrowserRouter(routeConfig);
