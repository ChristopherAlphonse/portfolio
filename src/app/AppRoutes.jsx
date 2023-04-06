import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Navigate, Route, Routes } from 'react-router-dom';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import FeaturedDetails from '../page/FeaturedDetails';
import Gallery from '../components/Gallery/Gallery';
import Home from '../components/Hero/Hero';
import PageNotFound from '../page/pageNotFound';
import ProjectDetails from '../page/ProjectDetails';
import React from 'react';
import TimeLine from '../components/Timeline/TimeLine';
import withRouter from '../hooks/withRouter';

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/v3j/" element={<Home />} />
        <Route path="/" element={<Navigate to="/v3/" />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects/" element={<Gallery />} />
        <Route path="/featured/:id" element={<FeaturedDetails />} />
        <Route path="/work" element={<TimeLine />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div>
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;
