import { lazy } from "react";
import withErrorBoundary from "../Components/HighOrderComponent/withErrorBoundary";

const AboutMe = lazy(() => import("../Pages/AboutMe"));
const Home = lazy(() => import("../Redux/Connect/home.connect"));
const PageNotFound = lazy(() => import("../Components/PageNotFound"));

export const ROUTES = [
  {
    path: "/",
    component: withErrorBoundary(Home),
    exact: true,
    private: true,
  },
  {
    path: "/about-me",
    component: withErrorBoundary(AboutMe),
    exact: true,
    private: true,
  },
  {
    component: withErrorBoundary(PageNotFound),
  },
];
