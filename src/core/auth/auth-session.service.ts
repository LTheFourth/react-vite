import { UserModel } from 'src/shared/models/user.model';
import cookieService from 'src/shared/service/cookies.service';

export class AuthSession {
  isLoggedIn: boolean = false;
  token?: string | null;
  userRole?: string | null;

  constructor() {
    this.getSessionToken();
  }

  get currentUserRole() {
    return this.userRole;
  }

  logout() {
    cookieService.delete('token');
    cookieService.delete('user_role');
    this.isLoggedIn = false;
  }

  setCurrentUser(userInfo: { accessToken: string; user: UserModel }) {
    this.isLoggedIn = true;
    this.token = userInfo.accessToken;
    this.userRole = userInfo.user.role;
    this.setSession();
  }

  private setSession() {
    cookieService.set('token', this.token!, 60);
    cookieService.set('user_role', this.userRole!, 60);
  }

  private getSessionToken() {
    this.token = cookieService.get('token') || null;
    this.userRole = cookieService.get('user_role');
    if (this.token) {
      this.isLoggedIn = true;
    }
  }
}

const authSession = new AuthSession();
export default authSession;
