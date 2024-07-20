import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ loading: false, data: genres, error: null });

export default useGenres;
