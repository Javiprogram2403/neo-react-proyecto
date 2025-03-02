import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi"; // Importar el custom hook
import CustomerForm from "../../components/customer/customerForm";
import { Layout } from "../../components/layout";

export function EditCustomerPage() {
  const [customer, setCustomer] = useState(null);
  const { id } = useParams();  // Obtenemos el id del cliente de la ruta

  
  const { data, loading, error } = useApi(`clientes/${id}`, { 
    auth: true 
  });

  useEffect(() => {
    if (data) {
      setCustomer(data);
    }
  }, [data]);

  
  if (loading) return <p>Cargando...</p>;

  
  if (error) return <p>Error al obtener el cliente: {error}</p>;

  return (
    <Layout>
      {customer ? (
        <CustomerForm customer={customer} /> // Pasamos el cliente para editar
      ) : (
        <p>No se encontró el cliente</p>
      )}
    </Layout>
  );
}
