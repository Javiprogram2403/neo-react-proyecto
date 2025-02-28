import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SaleList from "../../components/sale/saleList";
import { AuthContext } from "../../contexts/authContext";

export function SalesPage() {
    
    const [sales, setSales] = useState([])
    const {token} = useContext(AuthContext)
    useEffect(()=>{
        axios.get(`http://localhost:3000/ventas`,
            {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then((result)=>{
            setSales(result.data)
        })
    },[])

    async function handleDelete(saleId){
        try {
            await axios.delete(`http://localhost:3000/ventas/${saleId}`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            setSales(sales.filter(x=>x._id !== saleId))
        } catch (error) {
            console.error(error)
        }
       

    }

  return (
    <Layout>
       <SaleList sales={sales} onDelete={handleDelete}></SaleList>
    </Layout>
  );
}
