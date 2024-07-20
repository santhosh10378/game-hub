import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
        });
        setData(response.data.results);
      } catch (err: any) {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default useData;
