import { createBrowserRouter, type RouteObject } from "react-router";
import HomePage from "../pages/HomePage";
import Main from "../component/Main/Main";
import DetailsPage from "../pages/DetailsPage";
import SearchProductPage from "../pages/SearchProductPage";
// import LoginPage from "../pages/LoginPage";
import Success from "../Stripe/Success";
import Cancel from "../Stripe/Cancel";
import ErrorBoundary from "../Errorboundary/ErrorBoundary";
import ErrorFallback from "../Errorboundary/ErrorFallback";

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
        element: (
          <ErrorBoundary fallback={ErrorFallback} max_retries={3}>
            <SearchProductPage />
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "/success",
    Component: Success,
  },
  {
    path: "/cancel",
    Component: Cancel,
  },
];

export const router = createBrowserRouter(routeConfig);
