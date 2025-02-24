import { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import VehicleList from "../../components/vehicle/vehicleList";
import axios from "axios";

export const CatalogPage = () => {
    const [vehicles, setVehicles] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:3000/vehiculos")
        .then((result)=>{
            setVehicles(result.data)
        })
    })

  return (
    <Layout>
      {/* Todo el contenido de la página Home */}
      <h1>Catalog</h1>
      <VehicleList vehicles={vehicles}></VehicleList>
      {/* Más contenido... */}
    </Layout>
  );
};
