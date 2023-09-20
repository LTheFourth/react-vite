import { useState } from 'react';
import { Movie } from 'src/shared/models/movie.model';

export default function useHomePageLogic() {
  const [movies, setMovie] = useState<Movie[]>([]);
  1;

  return {
    prop: {},
    state: { movies },
    fn: {
      setMovie,
    },
  };
}
