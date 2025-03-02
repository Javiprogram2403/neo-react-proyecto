import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi"; // Importar el custom hook
import VehicleForm from "../../components/vehicle/vehicleForm"; 
import { Layout } from "../../components/layout";


export function EditVehiclePage() {
  const [vehicle, setVehicle] = useState(null);
  const { id } = useParams(); // Obtenemos el id del vehículo de la URL

  // Usamos el custom hook useApi para obtener el vehículo
  const { data, loading, error } = useApi(`vehiculos/${id}`, { 
    auth: true 
  });

  useEffect(() => {
    if (data) {
      setVehicle(data); // Actualizamos el estado con los datos obtenidos
    }
  }, [data]);

  // Si la petición está cargando, mostramos un mensaje de carga
  if (loading) return <p>Cargando...</p>;

  // Si hubo un error, mostramos el error
  if (error) return <p>Error al obtener el vehículo: {error}</p>;

  return (
    <Layout>
      {vehicle ? (
        <VehicleForm vehicle={vehicle} /> // Pasamos el vehículo para editar
      ) : (
        <p>No se encontró el vehículo</p>
      )}
    </Layout>
  );
}
