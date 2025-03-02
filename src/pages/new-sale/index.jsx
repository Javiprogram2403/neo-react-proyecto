import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi"; // Importar el custom hook
import SaleForm from "../../components/sale/saleForm";

export function NewSalePage() {
  const { id } = useParams();  // Obtenemos el id del vehículo de la URL
  const [vehicle, setVehicle] = useState(null);

  // Usamos el custom hook useApi para obtener el vehículo
  const { data, loading, error } = useApi(`vehiculos/${id}`);

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
      {vehicle ? <SaleForm vehicle={vehicle} /> : <p>No se encontró el vehículo</p>}
    </Layout>
  );
}
