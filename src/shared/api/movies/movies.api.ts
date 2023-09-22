// import { api } from '../config/axios.config';
import APIBase, { HTTPMethod } from '../config/base.api';

// const url = '/movies';
// export const MoviesAPI = {
//   getAll: async () => {
//     const response = await api.request({
//       url,
//       method: 'GET',
//     });

//     return response;
//   },

//   get: async (id: number) => {
//     const response = await api.request({
//       url: `${url}/${id}`,
//       method: 'GET',
//       // retrieving the signal value by using the property name
//       //   signal: cancel
//       //     ? cancelApiObject[this.get.name].handleRequestCancellation().signal
//       //     : undefined,
//     });

//     // returning the product returned by the API
//     return response;
//   },
// };

export class MoviesAPI extends APIBase {
  static url = 'movies';

  static async getAll() {
    return await this.request(this.url, HTTPMethod.GET);
  }

  static async get(id: string) {
    return await this.request(`${this.url}/${id}`, HTTPMethod.GET);
  }
}
