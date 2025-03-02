// components/vehicle/VehicleItem.js
import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button, Grid, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import fotoCoche from '../../assets/foto_coche.jpg'
const VehicleItem = ({ vehicle }) => {
  const { marca, modelo, precio, year, estado } = vehicle;
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/sale/${vehicle._id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> 
      <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
        
        
        <CardMedia
          component="img"
          alt={`${marca} ${modelo}`}
          height="200"
          image={fotoCoche } 
          sx={{ objectFit: 'cover' }}
        />
        
        <CardContent sx={{ flex: 1 }}>
         
          <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
            {marca} {modelo}
          </Typography>
          
          
          <Typography variant="body2" color="text.secondary">
            Año: {year}
          </Typography>
          
          
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', marginTop: 1 }}>
            ${precio.toLocaleString()}
          </Typography>
          
          
          <Box mt={2}>
            <Chip
              label={estado}
              color={estado === 'disponible' ? 'success' : 'error'}
              sx={{ textTransform: 'capitalize' }}
            />
          </Box>
          
          
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
