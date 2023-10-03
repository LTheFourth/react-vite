import { useState, useEffect } from 'react';
import { Movie } from 'src/shared/models/movie.model';
import MovieService from 'src/shared/api/movies/movies.api';

export default function useHomePageLogic() {
  const [movies, setMovie] = useState<Movie[]>([]);
  1;

  useEffect(() => {
    MovieService.getAll().then((response) => {
      if (response?.data) {
        setMovie(response.data);
      }
    });
  }, []);

  return {
    prop: {},
    state: { movies },
    fn: {
      setMovie,
    },
  };
}
