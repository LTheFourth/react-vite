import { Movie } from 'src/shared/models/movie.model';
import BaseAPI, { HTTPMethod } from '../config/base.api';

class MoviesAPI extends BaseAPI {
  private url = 'movies';

  async getAll() {
    return await this.request(this.url, HTTPMethod.GET);
  }

  async get(id: string) {
    return await this.request(`${this.url}/${id}`, HTTPMethod.GET);
  }

  async save(movie: Movie) {
    return await this.request(`${this.url}`, HTTPMethod.POST, movie);
  }

  async update(id: string, movie: Movie) {
    return await this.request(`${this.url}/${id}`, HTTPMethod.PUT, movie);
  }

  async delete(id: string) {
    return await this.request(`${this.url}/${id}`, HTTPMethod.DELETE);
  }
}

const movieSerive = new MoviesAPI();
export default movieSerive
