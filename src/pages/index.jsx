import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";


export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
  );
}
