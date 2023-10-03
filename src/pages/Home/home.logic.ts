import { useState, useEffect } from 'react';
import { Movie } from 'src/shared/models/movie.model';
import MovieService from 'src/shared/api/movies/movies.api';

export default function useHomePageLogic() {
  const [movies, setMovies] = useState<Movie[]>([]);
  1;

  useEffect(() => {
    MovieService.getAll().then((response) => {
      if (response?.data) {
        setMovies(response.data);
      }
    });
  }, []);

  return {
    movies,
    setMovies,
  };
}
