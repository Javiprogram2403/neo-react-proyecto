import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi"; // Importar el custom hook
import SaleForm from "../../components/sale/saleForm";

export function NewSalePage() {
  const { id } = useParams();  
  const [vehicle, setVehicle] = useState(null);

  
  const { data, loading, error } = useApi(`vehiculos/${id}`);

  useEffect(() => {
    if (data) {
      setVehicle(data); 
    }
  }, [data]);

  
  if (loading) return <p>Cargando...</p>;

  
  if (error) return <p>Error al obtener el vehículo: {error}</p>;

  return (
    <Layout>
      {vehicle ? <SaleForm vehicle={vehicle} /> : <p>No se encontró el vehículo</p>}
    </Layout>
  );
}
