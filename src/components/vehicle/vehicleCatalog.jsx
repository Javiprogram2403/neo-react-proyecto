// components/vehicle/VehicleCatalog.js
import React from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import VehicleItem from './vehicleItem';

export default function VehicleCatalog({ vehicles, isLoading }) {
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <CircularProgress />
        <Typography variant="h6" color="textSecondary">
          Cargando vehículos...
        </Typography>
      </div>
    );
  }

  if (!vehicles.length) {
    return (
      <Typography variant="h6" color="textSecondary" align="center">
        No hay vehículos para mostrar.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {vehicles.map((vehicle) => (
        <VehicleItem key={vehicle._id} vehicle={vehicle} />
      ))}
    </Grid>
  );
}
