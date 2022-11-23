import { lazy } from "react";

const Project = lazy(() => import("./Project"));
const Projects = lazy(() => import("./Projects"));
const BackTopBtn = lazy(() => import("./BackTopBtn"));
const DownBtn = lazy(() => import("./DownBtn"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));
const Hero = lazy(() => import("./Hero"));

export {
  Project,
  Projects,
  BackTopBtn,
  DownBtn,
  Contact,
  Footer,
  Header,
  Hero,
};
