import { UserModel } from 'src/shared/models/user.model';
import cookieService from 'src/shared/service/cookies.service';

export class AuthSession {
  isLoggedIn: boolean = false;
  protected token?: string | null;
  protected userRole?: string;

  constructor() {
    this.getSessionToken();
  }

  get currentUserRole() {
    return this.userRole;
  }

  logout(){
    cookieService.delete('token');
    cookieService.delete('user_role');
    this.isLoggedIn = false;
  }

  setCurrentUser(userInfo: { accessToken: string; user: UserModel }) {
    this.isLoggedIn = true;
    this.setToken(userInfo.accessToken);
    this.userRole = userInfo.user.role;
  }

  private setToken(token: string) {
    this.token = token;
    cookieService.set('token', this.token, 60);
    cookieService.set('user_role', this.token, 60);
  }

  private getSessionToken() {
    this.token = cookieService.get('token') || null;
    if (this.token) {
      this.isLoggedIn = true;
    }
  }
}

const authSession = new AuthSession();
export default authSession;
