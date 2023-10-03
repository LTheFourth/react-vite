import { UserModel } from 'src/shared/models/user.model';
import BaseAPI, { HTTPMethod } from '../config/base.api';

export class AuthAPI extends BaseAPI {
  async login(credentialInfo: { email: string; password: string }) {
    return await this.request<{ accessToken: string; user: UserModel }>(
      'login',
      HTTPMethod.POST,
      credentialInfo
    );
  }
}

const authService = new AuthAPI();
export default authService;
