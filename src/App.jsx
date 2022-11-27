import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const Noted = lazy(() => import("./pages/noted"));
const Pure = lazy(() => import("./pages/purebymel"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/v1/" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/v1/" />} />
          <Route path="*" element={<PageNotFound />} />{" "}
          <Route path="/projects/note-app" element={<Noted />} />
          <Route path="/projects/purebymel" element={<Pure />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
