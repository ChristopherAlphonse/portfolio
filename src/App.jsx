import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { initializeGA, logPageView } from './FirebaseAnalytics';
import { Gallery } from './components/compIndex';
import { FeaturedDetails, HomePage, PageNotFound, ProjectDetails } from './page/index';

function App() {
  useEffect(() => {
    initializeGA();
    logPageView();
  }, []);

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/v1/" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/v1/" />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects/" element={<Gallery />} />
          <Route path="/featured/:id" element={<FeaturedDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
