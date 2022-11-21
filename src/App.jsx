import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const PageNotFound = lazy(() => import("./PageNotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/v1/" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/v1/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
