import { useContext, useState } from "react";
import { Layout } from "../../components/layout";
import { AuthContext } from "../../contexts/authContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi"; // Importar el custom hook
import CustomerList from "../../components/customer/customerList";
import axios from "axios";
import { deleteCustomer } from "../../services/apiClient";

export function CustomersPage() {
  const navigate = useNavigate();
  const {token} = useContext(AuthContext)
  // Usamos el custom hook useApi para obtener los clientes
  const { data: customers, loading, error, refetch } = useApi("clientes", { 
    auth: true 
  });

  
  if (loading) return <h1>Loading...</h1>;

  
  if (error) return <h1>Error: {error}</h1>;



  
  const handleDelete = async (customerId) => {
    try {
      
      await deleteCustomer(customerId,token)
    navigate(0)
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

  // Función para navegar a la página de creación de un nuevo cliente
  const handleCreateCustomer = () => {
    navigate("/new-customer");
  };

  return (
    <Layout>
      <h1>Lista de Clientes</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateCustomer}
        style={{ marginBottom: "20px" }}
      >
        Crear Nuevo Cliente
      </Button>
      <CustomerList customers={customers} onDelete={handleDelete} />
    </Layout>
  );
}
