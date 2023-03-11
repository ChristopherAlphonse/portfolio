import ReactGA from 'react-ga';

const initializeGA = () => {
  const TrackingId = process.env.VITE_TRACKING_ID;
  ReactGA.initialize(TrackingId);
};

const logPageView = () => {
  const { pathname } = window.location;
  console.log(`Logging pageview for ${pathname}`);
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
};

const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export { initializeGA, logPageView, logEvent, logException };
