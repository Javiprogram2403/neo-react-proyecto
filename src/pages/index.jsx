import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { LoginPage } from "./login";
import { CatalogPage } from "./catalog";
import { NewSalePage } from "./new-sale";
import { SalesPage } from "./sales";
import { CustomersPage } from "./customers";
import { NewCustomerPage } from "./new-customer";
import { EditCustomerPage } from "./edit-customer";


export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/sale/:id" element={<NewSalePage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/new-customer" element={<NewCustomerPage />} />
      <Route path="/edit-customer/:id" element={<EditCustomerPage />} />
      </Routes>
  );
}
