import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layout";
import useApi from "../../hooks/useApi";  // Importamos el custom hook
import VehicleList from "../../components/vehicle/vehicleList";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { deleteVehicle } from "../../services/apiClient";

export function VehiclesPage() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  // Usamos el custom hook useApi para obtener los vehículos
  const { data: vehicles, loading, error } = useApi("vehiculos", { auth: true });



  // Si la petición está cargando, mostramos un mensaje de carga
  if (loading) return <p>Cargando...</p>;

  // Si hubo un error, mostramos el error
  if (error) return <p>Error al obtener los vehículos: {error}</p>;

  // El handleDelete lo dejamos con axios tal como estaba
  const handleDelete = async (vehicleId) => {
    try {
      await deleteVehicle(vehicleId,token)
        navigate(0)
    } catch (error) {
      console.error("Error al eliminar vehículo:", error);
    }
  };

  return (
    <Layout>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/new-vehicle")}
        style={{ marginBottom: "20px" }}
      >
        Crear Nuevo Vehículo
      </Button>
      <VehicleList vehicles={vehicles} onDelete={handleDelete} />
    </Layout>
  );
}
