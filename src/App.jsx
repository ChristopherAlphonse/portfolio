import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  FeaturedDetails,
  HomePage,
  PageNotFound,
  ProjectDetails,
} from "./page/index";

import { Gallery } from "./components/compIndex";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/v1/" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/v1/" />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects/" element={<Gallery />} />
          <Route path="/projects/:id" element={<FeaturedDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
