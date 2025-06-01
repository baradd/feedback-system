import { HttpMethod } from '@/types/httpMethods';

export interface IFetchOptions {
  method: HttpMethod;
  path: string;
  data?: any;
  headers?: Record<string, any>;
  token?: string;
  cache?: RequestCache;
}

export async function apiFetch(options: IFetchOptions) {
  const {
    method,
    path,
    data,
    headers,
    token,
    cache = 'no-cache',
  } = options || {};
  const config: RequestInit = {
    method,
    headers: {
      'content-type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
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
