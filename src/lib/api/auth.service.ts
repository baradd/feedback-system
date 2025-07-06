import { apiFetch } from '@/utils/api-fetch';
import Cookies from 'js-cookie'

export class AuthService {
  private _accessToken = '';
  private _refreshToken = ''

  async login() {
    const [token, refreshToken] = await apiFetch({
      method: 'POST',
      path: '/auth/login',
    });
    if (!token || !refreshToken) {
      throw new Error('Login failed');
    }
    this.setTokens(token, refreshToken);
  }

  private setTokens(accessToken: string, refreshToken: string) {
    accessToken = accessToken
    refreshToken = refreshToken
    Cookies.set('accessToken', accessToken)
    Cookies.set('refreshToken', refreshToken)
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken
  }

  logout() {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')

  }
}
