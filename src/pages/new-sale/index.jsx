import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import VehicleItem from "../../components/vehicle/vehicleItem";
import SaleForm from "../../components/sale/saleForm";

export function SalePage() {
    const {id} = useParams()
    const [vehicle, setVehicle] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:3000/vehiculos/${id}`)
        .then((result)=>{
            setVehicle(result.data)
        })
    },[])
  return (
    <Layout>
        {vehicle && <SaleForm vehicle={vehicle}></SaleForm>}
    </Layout>
  );
}
