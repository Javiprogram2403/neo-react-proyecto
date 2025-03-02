import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";  // Asegúrate de que la ruta sea correcta

const CustomerForm = ({ customer }) => {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  // Si estamos editando, llenamos los campos con los valores del customer
  useEffect(() => {
    if (customer) {
      setNombre(customer.nombre);
      setDni(customer.dni);
      setDireccion(customer.direccion || "");
    }
  }, [customer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (customer) {
        // Editar cliente
        await axios.put(
          `${import.meta.env.VITE_API_URL}/clientes/${customer._id}`,
          { nombre, dni, direccion },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate("/customers"); // Redirige a la lista de clientes después de la edición
      } else {
        // Crear cliente
        await axios.post(
          `${import.meta.env.VITE_API_URL}/clientes`,
          { nombre, dni, direccion },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate("/customers"); // Redirige a la lista de clientes después de crear
      }
    } catch (error) {
      console.error("Error al guardar cliente:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {customer ? "Editar Cliente" : "Crear Nuevo Cliente"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <TextField
          label="DNI"
          variant="outlined"
          fullWidth
          margin="normal"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <TextField
          label="Dirección"
          variant="outlined"
          fullWidth
          margin="normal"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          style={{ marginTop: "20px" }}
        >
          {loading ? "Guardando..." : customer ? "Actualizar Cliente" : "Crear Cliente"}
        </Button>
      </form>
    </Container>
  );
};

export default CustomerForm;
