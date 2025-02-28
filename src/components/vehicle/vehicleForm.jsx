// components/vehicle/VehicleForm.js
import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const VehicleForm = ({ vehicle }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [precio, setPrecio] = useState("");
  const [year, setYear] = useState("");
  const [estado, setEstado] = useState("disponible");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (vehicle) {
      setMarca(vehicle.marca);
      setModelo(vehicle.modelo);
      setPrecio(vehicle.precio);
      setYear(vehicle.year);
      setEstado(vehicle.estado);
    }
  }, [vehicle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (vehicle) {
        // Editar vehículo
        await axios.put(
          `http://localhost:3000/vehiculos/${vehicle._id}`,
          { marca, modelo, precio, year, estado },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate("/vehicles");
      } else {
        // Crear vehículo
        await axios.post(
          "http://localhost:3000/vehiculos",
          { marca, modelo, precio, year, estado },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate("/vehicles");
      }
    } catch (error) {
      console.error("Error al guardar vehículo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {vehicle ? "Editar Vehículo" : "Crear Nuevo Vehículo"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Marca"
          variant="outlined"
          fullWidth
          margin="normal"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />
        <TextField
          label="Modelo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
        <TextField
          label="Precio"
          variant="outlined"
          fullWidth
          margin="normal"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <TextField
          label="Año"
          variant="outlined"
          fullWidth
          margin="normal"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <TextField
          label="Estado"
          variant="outlined"
          fullWidth
          margin="normal"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          style={{ marginTop: "20px" }}
        >
          {loading ? "Guardando..." : vehicle ? "Actualizar Vehículo" : "Crear Vehículo"}
        </Button>
      </form>
    </Container>
  );
};

export default VehicleForm;
