import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import '../index.css';
import HeaderMain from '../components/header/Header';
import AnimatedCursor from '../hooks/AnimatedCursor';
import withRouter from '../hooks/withRouter';
import '../main.css';
import AppRoutes from './AppRoutes';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <BrowserRouter basename={import.meta.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <HeaderMain />
        <AppRoutes />
      </ScrollToTop>
    </BrowserRouter>
  );
}
export default App;
