// pages/vehicles/NewVehiclePage.js
import React from "react";
import VehicleForm from "../../components/vehicle/vehicleForm";
import { Layout } from "../../components/layout";
import { Typography } from "@mui/material";

export function NewVehiclePage() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Crear Nuevo Vehículo
      </Typography>
      {/* Usamos VehicleForm sin pasarle ningún vehículo, ya que es para crear */}
      <VehicleForm />
    </Layout>
  );
}
