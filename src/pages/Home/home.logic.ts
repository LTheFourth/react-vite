
import { useState, useEffect } from 'react';
import { MoviesAPI } from 'src/shared/api/movies/movies.api';
import { Movie } from 'src/shared/models/movie.model';

export default function useHomePageLogic() {
  const [movies, setMovie] = useState<Movie[]>([]);
  1;

  useEffect(() => {
    MoviesAPI.getAll().then((response) => {
      if (response?.data) {
        setMovie(response.data);
      }
    });
  }, []);

  const addMovie = () => {

  }

  return {
    prop: {},
    state: { movies },
    fn: {
      setMovie,
      addMovie
    },
  };
}
