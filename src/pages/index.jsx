import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { LoginPage } from "./login";


export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}
