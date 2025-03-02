import axios from "axios"

export const deleteCustomer = async(customerId,token)=>{
    return (await axios.delete(`http://localhost:3000/clientes/${customerId}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
      }))
}

export const deleteSale = async(saleId,token)=>{
    return (await axios.delete(`http://localhost:3000/ventas/${saleId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    }))
}

export const deleteVehicle = async(vehicleId,token)=>{
    return (await axios.delete(`http://localhost:3000/vehiculos/${vehicleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }))
}



