import {lazy} from "react";

const HomePage = lazy(() => import("./HomePage"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const ProjectDetails = lazy(() => import("./ProjectDetails"));
const FeaturedDetails = lazy(() => import("./FeaturedDetails"));
export {HomePage, PageNotFound, ProjectDetails, FeaturedDetails};
