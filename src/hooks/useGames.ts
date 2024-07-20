import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
      } catch (err) {
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

  return { games, loading, error };
};

export default useGames;
