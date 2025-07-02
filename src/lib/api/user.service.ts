import { apiFetch } from '@/utils/api-fetch';

export class UserService {
  getActiveUser(token: string) {}

  getUserById(userId: string) {
    const user = apiFetch({
      method: 'GET',
      path: `/users/${userId}`,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyZGNhNWQyLTQ2OWMtNGRkOS1iM2ExLTdmMmQyMjA2YmQ1ZiIsImZpcnN0bmFtZSI6ImRldiIsImxhc3RuYW1lIjoiZGV2IiwidG9rZW5JZCI6ImZkNGY0MjE5LTM5NDktNDU0Ny04OWFhLTNkYTAzZjY4NDNiMCIsInJlZnJlc2hUb2tlbklkIjoiNTdhZWU1OTktNTJmZC00MDdlLWFkZmMtYmY3MDUyZTZiZmE1IiwiaWF0IjoxNzUxMTk3OTk3LCJleHAiOjE3NTE1NTc5OTcsImF1ZCI6ImZlZWRiYWNrIiwiaXNzIjoiZmVlZGJhY2sifQ.rjTwGV0C0EJZWyFI_jQ1rcSkskmfTlBYD5KFcI8xK_o',
    });
  }
}
