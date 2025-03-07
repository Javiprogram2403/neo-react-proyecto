import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SaleList = ({ sales, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [ventaAEliminar, setVentaAEliminar] = useState(null);

  const handleOpenDialog = (venta) => {
    setVentaAEliminar(venta);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setVentaAEliminar(null);
  };

  const handleDelete = () => {
    if (ventaAEliminar) {
      onDelete(ventaAEliminar._id);
      setOpenDialog(false);
      setVentaAEliminar(null);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vendedor</TableCell>
              <TableCell>Comprador</TableCell>
              <TableCell>Vehículo</TableCell>
              <TableCell>Importe</TableCell>
              <TableCell>Acciones</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((venta, index) => (
              <TableRow key={index}>
                <TableCell>{venta.vendedor && venta.vendedor.nombre}</TableCell>
                <TableCell>{venta.comprador && venta.comprador.nombre}</TableCell>
                <TableCell>{`${venta.vehiculo && venta.vehiculo.marca} ${venta.vehiculo && venta.vehiculo.modelo} (${ venta.vehiculo &&venta.vehiculo.year})`}</TableCell>
                <TableCell>${venta.importe.toLocaleString()}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(venta)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <p>¿Estás seguro de que deseas eliminar esta venta?</p>
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

export default SaleList;
