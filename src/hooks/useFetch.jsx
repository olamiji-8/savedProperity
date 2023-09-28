import { useState, useEffect, useCallback } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/";

const useAxios = (parameter) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(parameter);
        setData(response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};
export { useAxios };
