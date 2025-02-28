// pages/vehicles/EditVehiclePage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VehicleForm from "../../components/vehicle/vehicleForm"; // Asegúrate de que la ruta sea correcta
import { Layout } from "../../components/layout";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function EditVehiclePage() {
  const [vehicle, setVehicle] = useState(null);
  const { id } = useParams(); // Obtenemos el id del vehículo de la URL
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/vehiculos/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVehicle(result.data);
      } catch (error) {
        console.error("Error al obtener vehículo:", error);
      }
    };

    fetchVehicle();
  }, [id, token]);

  return (
    <Layout>
      {vehicle ? (
        <VehicleForm vehicle={vehicle} /> 
      ) : (
        <p>Cargando...</p>
      )}
    </Layout>
  );
}
