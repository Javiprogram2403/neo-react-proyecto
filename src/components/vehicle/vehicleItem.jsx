import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VehicleItem = ({ vehicle }) => {
  const { marca, modelo, precio, year, estado } = vehicle;
    const navigate = useNavigate()

  const handleBuyClick = () => {
    navigate(`/sale/${vehicle._id}`)
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {marca} {modelo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Año: {year}
        </Typography>
        <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
          Precio: ${precio.toLocaleString()}
        </Typography>
        <Box mt={2}>
          <Chip label={estado} color={estado === 'disponible' ? 'success' : 'error'} />
        </Box>
        <Box mt={2}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleBuyClick} 
            disabled={estado !== 'disponible'}
          >
            Comprar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VehicleItem;
