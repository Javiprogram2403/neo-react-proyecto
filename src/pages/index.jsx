import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { LoginPage } from "./login";
import { CatalogPage } from "./catalog";
import { SalePage } from "./new-sale";


export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/sale/:id" element={<SalePage />} />
      </Routes>
  );
}
