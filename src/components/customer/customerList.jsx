import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const CustomerList = ({ customers, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const navigate = useNavigate();

  const handleOpenDialog = (customer) => {
    setCustomerToDelete(customer);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCustomerToDelete(null);
  };

  const handleDelete = () => {
    if (customerToDelete) {
      onDelete(customerToDelete._id); // Llamar a la función onDelete pasándole el id del cliente
      setOpenDialog(false);
      setCustomerToDelete(null);
    }
  };

  const handleEdit = (customerId) => {
    navigate(`/edit-customer/${customerId}`);  // Redirigir a la página de edición del cliente
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Acciones</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer._id}>
                <TableCell>{customer.nombre}</TableCell>
                <TableCell>{customer.dni}</TableCell>
                <TableCell>{customer.direccion || 'No disponible'}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(customer._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenDialog(customer)}>
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
          <p>¿Estás seguro de que deseas eliminar este cliente?</p>
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

export default CustomerList;
