import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CustomerForm from "../../components/customer/customerForm";  // Asegúrate de que la ruta sea correcta
import { Layout } from "../../components/layout";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function EditCustomerPage() {
  const [customer, setCustomer] = useState(null);
  const { id } = useParams();  // Obtenemos el id del cliente de la ruta
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/clientes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCustomer(result.data);
      } catch (error) {
        console.error("Error al obtener cliente:", error);
      }
    };

    fetchCustomer();
  }, [id, token]);

  return (
    <Layout>
      {customer ? (
        <CustomerForm customer={customer} /> // Pasamos el cliente para editar
      ) : (
        <p>Cargando...</p>
      )}
    </Layout>
  );
}
