import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { CatalogPage } from "./catalog";
import { NewSalePage } from "./new-sale";
import { SalesPage } from "./sales";
import { CustomersPage } from "./customers";
import { NewCustomerPage } from "./new-customer";
import { EditCustomerPage } from "./edit-customer";
import { VehiclesPage } from "./vehicles";
import { NewVehiclePage } from "./new-vehicle";
import { EditVehiclePage } from "./edit-vehicle";
import { MyProfilePage } from "./my-profile";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/sale/:id"
        element={
          <ProtectedRoute>
            <NewSalePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sales"
        element={
          <ProtectedRoute>
            <SalesPage />
          </ProtectedRoute>
        }
      />

      {/* Rutas protegidas */}
      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <CustomersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-customer"
        element={
          <ProtectedRoute>
            <NewCustomerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-customer/:id"
        element={
          <ProtectedRoute>
            <EditCustomerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vehicles"
        element={
          <ProtectedRoute>
            <VehiclesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new-vehicle"
        element={
          <ProtectedRoute>
            <NewVehiclePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-vehicle/:id"
        element={
          <ProtectedRoute>
            <EditVehiclePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-profile"
        element={
          <ProtectedRoute>
            <MyProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
