import { ResponsiveNavBar } from "./NavBar/head";
import { lazy } from "react";

const Projects = lazy(() => import("./Projects"));
const TimeLine = lazy(() => import("./Timeline/TimeLine"));
const BackTopBtn = lazy(() => import("./Btn/BackTopBtn"));
const DownBtn = lazy(() => import("./Btn/DownBtn"));
const Contact = lazy(() => import("./Contact/Contact"));
const Footer = lazy(() => import("./Footer/Footer"));
const Head = lazy(() => import("./NavBar/head"));
const Hero = lazy(() => import("./Hero/Hero"));
const About = lazy(() => import("./About/About"));

export {
  Projects,
  BackTopBtn,
  DownBtn,
  Contact,
  Footer,
  Head,
  Hero,
  About,
  TimeLine,
  ResponsiveNavBar,
};
