import { apiFetch } from '@/utils/api-fetch';

export class Auth {
  private _token = '';

  async login() {
    const [token, refreshToken] = await apiFetch({
      method: 'POST',
      path: '/auth/login',
    });
    if (!token) {
      throw new Error('Login failed');
    }
    token(token);
  }

  private set token(token: string) {
    this._token = token;
  }

  get token() {
    return this.token;
  }
}
