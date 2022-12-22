import { ResponsiveNavBar } from "./NavBar/head";
import { lazy } from "react";

const TimeLine = lazy(() => import("./Timeline/TimeLine"));
const BackTopBtn = lazy(() => import("./Btn/BackTopBtn"));
const DownBtn = lazy(() => import("./Btn/DownBtn"));
const Contact = lazy(() => import("./Contact/Contact"));
const Footer = lazy(() => import("./Footer/Footer"));
const Head = lazy(() => import("./NavBar/head"));
const Hero = lazy(() => import("./Hero/Hero"));
const About = lazy(() => import("./About/About"));
const Featured = lazy(() => import("./Featured/Featured"));
const Projects = lazy(() => import("./Projects/Projects"));

export {
  BackTopBtn,
  Featured,
  DownBtn,
  Contact,
  Footer,
  Head,
  Hero,
  About,
  TimeLine,
  Projects,
  ResponsiveNavBar,
};
