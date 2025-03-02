// components/profile/ProfileForm.js
import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const ProfileForm = () => {
  const { user, token, setUser } = useContext(AuthContext);  // Usamos el contexto para obtener datos de usuario y token
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Cargar los datos iniciales del usuario en los campos del formulario
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Actualizamos los datos del usuario en la API
      const result = await axios.put(
        `${import.meta.env.VITE_API_URL}/usuarios/${user._id}`,
        {  email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      
      alert("Datos actualizados correctamente");
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
      alert("Error al actualizar los datos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Editar Perfil
      </Typography>
      <form onSubmit={handleSubmit}>
    
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          {loading ? "Guardando..." : "Guardar Cambios"}
        </Button>
      </form>
    </Container>
  );
};

export default ProfileForm;
