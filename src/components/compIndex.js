import { ResponsiveNavBar } from "./Head";
import { lazy } from "react";

const Project = lazy(() => import("./Project"));
const Projects = lazy(() => import("./Projects"));
const BackTopBtn = lazy(() => import("./BackTopBtn"));
const DownBtn = lazy(() => import("./DownBtn"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));
const Head = lazy(() => import("./Head"));
const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));



export {
  Project,
  Projects,
  BackTopBtn,
  DownBtn,
  Contact,
  Footer,
  Head,
  Hero,
  About,
  ResponsiveNavBar,
};
