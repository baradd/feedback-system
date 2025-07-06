import { ActiveUserData } from '@/types/activeUserData';
import { apiFetch } from '@/utils/api-fetch';

export class UserService {
  async getActiveUser(): Promise<ActiveUserData> {
    const user = await apiFetch({
      method: "GET",
      path: '/users/active'
    })
    return user
  }

  async getUserById(userId: string): Promise<any> {
    const user = await apiFetch({
      method: 'GET',
      path: `/users/${userId}`,
    });
    return user
  }
}
