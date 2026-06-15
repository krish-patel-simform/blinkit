import { createBrowserRouter, type RouteObject } from "react-router";
import HomePage from "../pages/HomePage";
import Main from "../component/Main/Main";
import DetailsPage from "../pages/DetailsPage";
import SearchProductPage from "../pages/SearchProductPage";

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
      {
        path: "s/products",
        Component: SearchProductPage,
      },
    ],
  },
];

export const router = createBrowserRouter(routeConfig);
