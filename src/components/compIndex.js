import { lazy } from 'react';

const TimeLine = lazy(() => import('./Timeline/TimeLine'));
const BackTopBtn = lazy(() => import('./Btn/BackTopBtn'));
const DownBtn = lazy(() => import('./Btn/DownBtn'));
const Contact = lazy(() => import('./Contact/Contact'));
const Footer = lazy(() => import('./Footer/Footer'));
const ResponsiveNavBar = lazy(() => import('./NavBar/ResponsiveNavBar'));
const Hero = lazy(() => import('./Hero/Hero'));
const About = lazy(() => import('./About/About'));
const Featured = lazy(() => import('./Featured/Featured'));
const Projects = lazy(() => import('./Projects/Projects'));
const Gallery = lazy(() => import('./Gallery/Gallery'));

export { BackTopBtn, Featured, DownBtn, Contact, Footer, ResponsiveNavBar, Hero, About, TimeLine, Projects, Gallery };
