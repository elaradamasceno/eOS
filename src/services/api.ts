export function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  const apiPrefix = '/api';

  if (!baseUrl) {
    throw new Error('APP_URL is not defined');
  }

  const url = new URL(`${apiPrefix}${path}`, baseUrl);
  return fetch(url, init);
}
