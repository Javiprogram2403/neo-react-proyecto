import axios from "axios"

export const deleteCustomer = async(customerId,token)=>{
    return (await axios.delete(`${import.meta.env.VITE_API_URL}/clientes/${customerId}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
      }))
}

export const deleteSale = async(saleId,token)=>{
    return (await axios.delete(`${import.meta.env.VITE_API_URL}/ventas/${saleId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }))
}

export const deleteVehicle = async(vehicleId,token)=>{
    return (await axios.delete(`${import.meta.env.VITE_API_URL}/vehiculos/${vehicleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }))
}



