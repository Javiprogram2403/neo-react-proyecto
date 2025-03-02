import { Layout } from "../../components/layout";
import useApi from "../../hooks/useApi"; // Importar el custom hook
import VehicleCatalog from "../../components/vehicle/vehicleCatalog";

export const CatalogPage = () => {
  // Usamos el custom hook useApi para obtener los vehículos
  const { data: vehicles, loading, error } = useApi("vehiculos", { auth: false });

  // Si la petición está cargando, mostramos un mensaje de carga
  if (loading) return <h1>Loading...</h1>;

  // Si hubo un error en la petición, mostramos el error
  if (error) return <h1>Error: {error}</h1>;

  return (
    <Layout>
      {/* Todo el contenido de la página Catalog */}
      <h1>Catalog</h1>
      <VehicleCatalog vehicles={vehicles} />
      {/* Más contenido... */}
    </Layout>
  );
};
