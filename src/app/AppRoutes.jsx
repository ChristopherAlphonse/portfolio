import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Gallery from '../components/Gallery/Gallery';
import Home from '../components/Hero/Hero';
import withRouter from '../hooks/withRouter';
import FeaturedDetails from '../page/FeaturedDetails';
import ProjectDetails from '../page/ProjectDetails';
import PageNotFound from '../page/pageNotFound';

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

        <Route path="/v1/" element={<Home />} />
        <Route path="/" element={<Navigate to="/v1/" />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects/" element={<Gallery />} />
        <Route path="/featured/:id" element={<FeaturedDetails />} />
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
