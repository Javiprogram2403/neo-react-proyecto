import axios from "axios";
import { useCallback, useEffect, useState, useContext } from "react";
import  {AuthContext}  from "../contexts/authContext"; // Asume que tu contexto está aquí

// Definimos la URL base
const BASE_URL = "http://localhost:3000/";

export default function useApi(url, options = {}) {
  const { token } = useContext(AuthContext); // Obtener el token del contexto
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error state on each request

    // Concatenamos la base URL con la URL proporcionada
    const fullUrl = `${BASE_URL}${url}`;

    const { method = 'GET', body, headers, auth = true } = options; // Default to GET, auth is true by default
    try {
      // Si 'auth' es true, agrega la cabecera Authorization
      const config = {
        url: fullUrl,
        method,
        data: body, // `data` is used for POST, PUT, PATCH
        headers: {
          ...headers,
          ...(auth && token ? { Authorization: `Bearer ${token}` } : {}), // Si 'auth' es true y hay un token, añade el header
        },
      };

      const response = await axios(config);
      setData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options, token]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}
