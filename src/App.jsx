import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import React, { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const PageNotFound = lazy(() => import("./PageNotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <PropagateLoader
            color="#36c8d6"
            size={20}
            speedMultiplier={3}
            cssOverride={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "100vh",
              width: "100%",
              background: "#3f3f46",
            }}
          />
        }
      >
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
