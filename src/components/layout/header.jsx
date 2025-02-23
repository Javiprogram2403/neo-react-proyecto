// components/Header.jsx

import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Drawer,
  Badge,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutSharp from "@mui/icons-material/LogoutSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  // Estado para controlar la apertura y cierre del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate()
  // Función para manejar el input de búsqueda
  const handleSearchInput = (event) => {
    const query = event.target.value;
    console.log(query); // Aquí puedes manejar la lógica de búsqueda
  };



  function logout(){
    dispatch({type: 'LOGOUT'})
    navigate("/login")
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Botón del menú */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
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

          {/* Icono de cuenta de usuario */}

         
         
          

          {/* Icono del carrito de compras */}
          <IconButton color="inherit" >
            <Badge badgeContent={4} color="secondary">
              {" "}
              {/* Dinamiza esta cantidad según el estado del carrito */}
              <ShoppingCartIcon className="shake-animation" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para el carrito */}
      <Drawer anchor="right" open={isCartOpen} >
      </Drawer>
    </>
  );
};

export default Header;
