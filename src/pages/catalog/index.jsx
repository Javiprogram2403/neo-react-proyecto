import { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import axios from "axios";
import VehicleCatalog from "../../components/vehicle/vehicleCatalog";

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
      <VehicleCatalog vehicles={vehicles}></VehicleCatalog>
      {/* Más contenido... */}
    </Layout>
  );
};
