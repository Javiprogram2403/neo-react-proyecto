// components/vehicle/VehicleList.js
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

const VehicleList = ({ vehicles, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);
  const navigate = useNavigate();

  const handleOpenDialog = (vehicle) => {
    setVehicleToDelete(vehicle);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setVehicleToDelete(null);
  };

  const handleDelete = () => {
    if (vehicleToDelete) {
      onDelete(vehicleToDelete._id);  // Llamar a la función onDelete con el id del vehículo
      setOpenDialog(false);
      setVehicleToDelete(null);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Año</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle._id}>
                <TableCell>{vehicle.marca}</TableCell>
                <TableCell>{vehicle.modelo}</TableCell>
                <TableCell>{vehicle.precio}</TableCell>
                <TableCell>{vehicle.year}</TableCell>
                <TableCell>{vehicle.estado}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/edit-vehicle/${vehicle._id}`)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => handleOpenDialog(vehicle)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo de confirmación de eliminación */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <p>¿Estás seguro de que deseas eliminar este vehículo?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VehicleList;
