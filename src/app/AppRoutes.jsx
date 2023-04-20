import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Navigate, Route, Routes } from 'react-router-dom';

import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import FeaturedDetails from '../page/FeaturedDetails';
import Home from '../components/Hero/Hero';
import PageNotFound from '../page/pageNotFound';
import Portfolio from '../components/Portfolio/Portfolio';
import Resume from '../components/Resume/Resume';
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
      unmountOnExit
    >
      <Routes location={location}>
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/v3/" element={<Home />} />
        <Route path="/" element={<Navigate to="/v3/" />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/projects/" element={<Portfolio />} />
        <Route path="/projects/:id" element={<FeaturedDetails />} />
        <Route path="/work" element={<TimeLine />} />
        <Route path="/resume" element={<Resume />} />
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
