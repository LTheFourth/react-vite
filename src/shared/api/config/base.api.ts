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

export default abstract class BaseAPI {
  protected http = apiConfig;

  async request<T>(
    url: string,
    method: HTTPMethod,
    data?: any,
    headers?: any
  ) {
    return await this.http.request<T|any>({ url, method, headers, data });
  }
}
