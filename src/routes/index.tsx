import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Navbar from "../views/components/organisms/Navbar";

const RouteProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/old" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteProvider;
