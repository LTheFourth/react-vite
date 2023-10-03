import { UserModel } from 'src/shared/models/user.model';
import cookieService from 'src/shared/service/cookies.service';

export class AuthSession {
  isLoggedIn: boolean = false;
  protected token?: string | null;
  private user?: UserModel;

  constructor() {
    this.getSessionToken();
  }

  get currentUser() {
    return this.user;
  }

  setCurrentUser(userInfo: { accessToken: string; user: UserModel }) {
    this.isLoggedIn = true;
    this.setToken(userInfo.accessToken);
    this.user = userInfo.user;
  }

  private setToken(token: string) {
    this.token = token;
    cookieService.set('token', this.token, 60);
  }

  private getSessionToken() {
    this.token = cookieService.get('token') || null;
  }

}

const authSession = new AuthSession();
export default authSession;
