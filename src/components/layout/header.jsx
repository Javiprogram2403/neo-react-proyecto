import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AuthContext } from "../../contexts/authContext";

const Header = () => {
  // Estado para controlar la apertura y cierre del Drawer (menú)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {logout } = useContext(AuthContext)

  const navigate = useNavigate();

  // Función para manejar el input de búsqueda
  const handleSearchInput = (event) => {
    const query = event.target.value;
    console.log(query); // Aquí puedes manejar la lógica de búsqueda
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsDrawerOpen(false);  // Cerrar el Drawer al hacer clic en un menú
  };

  function doLogout() {
    // Aquí iría tu lógica para hacer logout
    logout()
    navigate("/login");
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Botón del menú (abre el Drawer) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título de la tienda */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi concesionario
          </Typography>

          {/* Barra de búsqueda */}
          <TextField
            id="search-bar"
            className="text"
            onChange={handleSearchInput}
            label="Buscar productos"
            variant="outlined"
            placeholder="Buscar..."
            size="small"
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: 1, mr: 2 }}
          />

          {/* Icono del carrito de compras */}
          <IconButton color="inherit" onClick={() => setIsCartOpen(true)}>
            <Badge badgeContent={4} color="secondary">
              {/* Dinamiza esta cantidad según el estado del carrito */}
              <ShoppingCartIcon className="shake-animation" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para el menú lateral */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List>
          <ListItem button onClick={() => handleNavigate("/catalog")}>
            <ListItemText primary="Catálogo" />
          </ListItem>
          <ListItem button onClick={() => handleNavigate("/sales")}>
            <ListItemText primary="Ventas" />
          </ListItem>
          <ListItem button onClick={() => handleNavigate("/customers")}>
            <ListItemText primary="Clientes" />
          </ListItem>
          <ListItem button onClick={() => handleNavigate("/vehicles")}>
            <ListItemText primary="Vehículos" />
          </ListItem>
          {/* Opcional: puedes agregar un logout aquí si lo deseas */}
          <ListItem button onClick={doLogout}>
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </List>
      </Drawer>

      {/* Drawer para el carrito (opcional si tienes el carrito) */}
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        {/* Aquí podrías agregar el contenido del carrito */}
      </Drawer>
    </>
  );
};

export default Header;
