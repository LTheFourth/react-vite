import { Movie } from 'src/shared/models/movie.model';
import APIBase, { HTTPMethod } from '../config/base.api';

export class MoviesAPI extends APIBase {
  private static url = 'movies';

  static async getAll() {
    return await this.request(this.url, HTTPMethod.GET);
  }

  static async get(id: string) {
    return await this.request(`${this.url}/${id}`, HTTPMethod.GET);
  }

  static async save(movie: Movie) {
    return await this.request(`${this.url}`, HTTPMethod.POST, movie);
  }

  static async update(id: string, movie: Movie) {
    return await this.request(`${this.url}/${id}`, HTTPMethod.PUT, movie);
  }

  static async delete(id: string) {
    return await this.request(`${this.url}/${id}`, HTTPMethod.DELETE);
  }
}
