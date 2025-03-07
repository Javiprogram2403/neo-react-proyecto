import { Layout } from "../../components/layout";
import useApi from "../../hooks/useApi";  // Importamos el custom hook
import SaleList from "../../components/sale/saleList";
import { AuthContext } from "../../contexts/authContext";
import { deleteSale } from "../../services/apiClient";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

export function SalesPage() {
    const {token} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const { data:sales, loading, error } = useApi('ventas', { 
        auth: true
    });



    
    if (loading) return <p>Cargando...</p>;

    
    if (error) return <p>Error al obtener las ventas: {error}</p>;

    // El handleDelete lo dejamos con axios tal como estaba
    async function handleDelete(saleId) {
        try {
            await deleteSale(saleId, token)
           navigate(0)
        } catch (error) {
            console.error("Error al eliminar la venta:", error);
        }
    }

    return (
        <Layout>
            <SaleList sales={sales} onDelete={handleDelete} />
        </Layout>
    );
}
