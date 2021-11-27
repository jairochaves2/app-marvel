import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../views/pages/404";
// import App from "../App";
import Home from "../views/pages/Home";
import SendMe from "../views/pages/SendMe";

const RouteProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send-me" element={<SendMe />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteProvider;
