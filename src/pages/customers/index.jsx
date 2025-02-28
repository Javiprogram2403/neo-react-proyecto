import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CustomerList from "../../components/customer/customerList";  // Asegúrate de que la ruta sea correcta
import { Layout } from "../../components/layout";
import { AuthContext } from "../../contexts/authContext";
import { Button } from "@mui/material";  // Importamos el botón de MUI
import { useNavigate } from "react-router-dom";  // Importamos useNavigate

export function CustomersPage() {
    
    const [customers, setCustomers] = useState([]);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();  // Inicializamos useNavigate

    useEffect(() => {
        axios.get("http://localhost:3000/clientes", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((result) => {
            setCustomers(result.data);
        })
        .catch((error) => {
            console.error("Error al obtener clientes:", error);
        });
    }, [token]);

    async function handleDelete(customerId) {
        try {
            await axios.delete(`http://localhost:3000/clientes/${customerId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCustomers(customers.filter((customer) => customer._id !== customerId));
        } catch (error) {
            console.error("Error al eliminar cliente:", error);
        }
    }

    const handleCreateCustomer = () => {
        navigate("/new-customer");  // Redirige a la página para crear un nuevo cliente
    };

    return (
        <Layout>
            <h1>Lista de Clientes</h1>
            {/* Botón para crear un nuevo cliente */}
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
