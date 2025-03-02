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
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AuthContext } from "../../contexts/authContext";

const Header = () => {
  // Estado para controlar la apertura y cierre del Drawer (menú)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { logout, user } = useContext(AuthContext);

  const navigate = useNavigate();

  // Función para manejar el input de búsqueda
  const handleSearchInput = (event) => {
    const query = event.target.value;
    console.log(query); 
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsDrawerOpen(false); // Cerrar el Drawer al hacer clic en un menú
  };

  function doLogout() {
    
    logout();
    navigate("/login");
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          
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

          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi concesionario
          </Typography>

          {user && user.nombre}

          {user && (
            <IconButton color="inherit" onClick={doLogout}>
              <ExitToAppIcon className="shake-animation" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      
      <Drawer
      
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List>
          <ListItem button onClick={() => handleNavigate("/")}>
            <ListItemText primary="Catálogo" />
          </ListItem>
          {!user && 
          <ListItem button onClick={() => handleNavigate("/login")}>
          <ListItemText primary="Login" />
        </ListItem>}
          {user && (
            <>
              <ListItem button onClick={() => handleNavigate("/sales")}>
                <ListItemText primary="Ventas" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/customers")}>
                <ListItemText primary="Clientes" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/vehicles")}>
                <ListItemText primary="Vehículos" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
