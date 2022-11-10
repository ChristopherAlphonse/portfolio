import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/v1/" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/v1/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
