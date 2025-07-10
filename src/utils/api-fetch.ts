import { HttpMethod } from '@/types/httpMethods';
import { AuthService } from '@/lib/api/auth.service';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export interface IFetchOptions {
  method: HttpMethod;
  path: string;
  data?: any;
  headers?: Record<string, any>;
  token?: string;
  cache?: RequestCache;
}

export async function apiFetch(options: IFetchOptions) {


  const accessToken = Cookies.get('accessToken')
  if (!accessToken) {
    // TODO: redirect to login or use refresh token
  }
  const {
    method,
    path,
    data,
    headers,
    cache = 'no-cache',
  } = options || {};
  const config: RequestInit = {
    method,
    headers: {
      'content-type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      ...headers,
    },
    cache,
  };
  if (data && method !== 'GET') {
    config.body = JSON.stringify(data);
  }
  const baseUrl = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;
  const response = await fetch(baseUrl + path, config);

  const contentType = response.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    return response.json();
  }

  return response;
}


export function toastError(error: unknown, fallback = 'Something went wrong') {
  const message = error instanceof Error ? error.message : typeof error === 'string' ? error : fallback
  toast.error(message)
}
