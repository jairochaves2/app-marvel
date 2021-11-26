import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../views/pages/Home";

const RouteProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/old" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteProvider;
