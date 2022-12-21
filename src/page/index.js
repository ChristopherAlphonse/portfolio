import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const ProjectDetails = lazy(() => import("./ProjectDetails"));
export { HomePage, PageNotFound, ProjectDetails };
