import React, { useContext, useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, login, user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para la autenticación o validación
    if (!email || !password) {
    } else {
      // Aquí iría la lógica de autenticación
      console.log("Accediendo con:", { email, password });
      await login(email, password);
    }
  };

  if (user) {
    return <Navigate to="/"></Navigate>;
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
            p: 2,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Iniciar sesión
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Acceder
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
};

export default LoginForm;
