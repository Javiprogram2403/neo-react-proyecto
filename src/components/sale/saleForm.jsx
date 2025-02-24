import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, CircularProgress, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

export default function SaleForm({ vehicle }) {
  const [isLoading, setIsLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [customerData, setCustomerData] = useState({
        dni: '',
        direccion: '',
        nombre: ''
    })

  // Cargar clientes desde la API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        setCustomers(response.data); 
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar los clientes:', error);
      }
    };
    
    fetchCustomers();
  }, []);

  // Manejar selección de cliente
  const handleCustomerChange = (event) => {
    const customerId = event.target.value;
    setSelectedCustomerId(customerId);

    // Buscar el cliente seleccionado y actualizar los campos
    const customer = customers.find(c => c._id === customerId);
    setCustomerData({
      dni: customer.dni,
      nombre: customer.nombre,
      direccion: customer.direccion
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // crear venta

    console.log('Formulario enviado con los datos:', clienteData);
    setIsSubmitting(false);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ padding: 2 }}>
        {/* Datos del vehículo */}
        <Typography variant="h6" gutterBottom>
          Datos del vehículo
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Marca"
              value={vehicle.marca}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Modelo"
              value={vehicle.modelo}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Precio original"
              value={vehicle.precio}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Año de fabricación"
              value={vehicle.year}
              variant="outlined"
              disabled
            />
          </Grid>
        </Grid>

        {/* Selección de comprador */}
        <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
          Datos del comprador
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Selecciona un comprador</InputLabel>
              <Select
                value={selectedCustomerId}
                label="Selecciona un comprador"
                onChange={handleCustomerChange}
                required
              >
                {customers.map((customer) => (
                  <MenuItem key={customer._id} value={customer._id}>
                    {customer.nombre} ({customer.dni})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="DNI"
              value={customerData.dni}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre"
              value={customerData.nombre}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Dirección"
              value={customerData.direccion}
              variant="outlined"
              disabled
            />
          </Grid>
        </Grid>

        {/* Botón de envío */}
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Procesando...' : 'Confirmar compra'}
          </Button>
        </Box>
      </Box>
    </form>
  );
}
