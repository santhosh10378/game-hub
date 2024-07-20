import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchGenres = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await apiClient.get<FetchGenresResponse>("/genres", {
          signal: controller.signal,
        });
        setGenres(response.data.results);
      } catch (err: any) {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();

    return () => controller.abort();
  }, []);

  return { genres, loading, error };
};

export default useGenres;
