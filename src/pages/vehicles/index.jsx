// pages/vehicles/VehiclesPage.js
import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layout";
import axios from "axios";
import VehicleList from "../../components/vehicle/vehicleList";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const result = await axios.get("http://localhost:3000/vehiculos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVehicles(result.data);
      } catch (error) {
        console.error("Error al obtener vehículos:", error);
      }
    };

    fetchVehicles();
  }, [token]);

  const handleDelete = async (vehicleId) => {
    try {
      await axios.delete(`http://localhost:3000/vehiculos/${vehicleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVehicles(vehicles.filter((vehicle) => vehicle._id !== vehicleId));
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
