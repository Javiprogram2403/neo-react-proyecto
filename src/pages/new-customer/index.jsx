import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";  // Asegúrate de que la ruta sea correcta

export function NewCustomerPage() {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "http://localhost:3000/clientes",
        { nombre, dni, direccion },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/customers"); // Redirigir a la lista de clientes después de crear
    } catch (error) {
      console.error("Error al crear el cliente:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Crear Nuevo Cliente
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
          {loading ? "Creando..." : "Crear Cliente"}
        </Button>
      </form>
    </Container>
  );
}
