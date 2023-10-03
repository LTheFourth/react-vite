/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiConfig } from './axios.config';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export default abstract class APIBaseSingleton {
  protected http = apiConfig;

  async request(
    url: string,
    method: HTTPMethod,
    data?: any,
    headers?: any
  ) {
    return await this.http.request({ url, method, headers, data });
  }
}
