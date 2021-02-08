import fetch from 'node-fetch';
import { stringify } from 'query-string';

const EASYVEREIN_HOST = 'https://easyverein.com/api';
let API_VERSION = 'v1.1'
let TOKEN = '';

export const createParameterizedApiRoute = (
  route: string,
  parameters?: any,
  page?: number
) => {
  const params = {
    ...parameters,
    page,
  };
  return `${route}?${stringify(params)}`;
};

/**
 * Perform an authenticated GET request to the given url.
 * @param url The url to fetch
 */
export const performRequest = (url: string) => {
  const fullUrl = url.startsWith('http') ? url : `${EASYVEREIN_HOST}/${API_VERSION}${url}`;
  const headers = {
    Authorization: `Token ${TOKEN}`,
  };
  return fetch(fullUrl, {
    headers,
  }).then((response) => response.json());
}

/**
 * Recursiveley performs requests to fetch paged data. If no next page is available, the array will be returned.
 * @param url The url to fetch
 * @param arr The result array to be filled
 */
export const performPagedRequest = (url: string, arr: any[]) =>
  performRequest(url)
    .then((json) => {
      arr.push(...json.results);
      if (!json.next) return arr;
      return performPagedRequest(json.next, arr);
    });

export const setApiToken = (token: string) => {
  if (!token)
    throw new Error(
      'Please specify the easyVerein® token for authenticated requests.'
    );

  TOKEN = token
}

export const setApiVersion = (version: 'v1' | 'v1.1') => {
  if (version !== 'v1' && version !== 'v1.1')
    throw new Error('Invalid version string.')

  API_VERSION = version;
}
