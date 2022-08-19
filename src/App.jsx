import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/portfolio" element={<HomePage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
