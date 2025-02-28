// components/vehicle/VehicleItem.js
import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button, Grid, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VehicleItem = ({ vehicle }) => {
  const { marca, modelo, precio, year, estado, imagen } = vehicle; // Asumimos que `imagen` es una URL de la imagen del coche
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/sale/${vehicle._id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Responsive grid */}
      <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
        
        {/* Imagen del vehículo */}
        <CardMedia
          component="img"
          alt={`${marca} ${modelo}`}
          height="200"
          image={imagen || "https://via.placeholder.com/400x200?text=Imagen+no+disponible"} // Imagen genérica si no hay imagen
          sx={{ objectFit: 'cover' }}
        />
        
        <CardContent sx={{ flex: 1 }}>
          {/* Título */}
          <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
            {marca} {modelo}
          </Typography>
          
          {/* Año */}
          <Typography variant="body2" color="text.secondary">
            Año: {year}
          </Typography>
          
          {/* Precio */}
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', marginTop: 1 }}>
            ${precio.toLocaleString()}
          </Typography>
          
          {/* Estado */}
          <Box mt={2}>
            <Chip
              label={estado}
              color={estado === 'disponible' ? 'success' : 'error'}
              sx={{ textTransform: 'capitalize' }}
            />
          </Box>
          
          {/* Botón de compra */}
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBuyClick}
              disabled={estado !== 'disponible'}
              fullWidth
              sx={{ textTransform: 'none' }}
            >
              {estado === 'disponible' ? 'Comprar' : 'No disponible'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VehicleItem;
