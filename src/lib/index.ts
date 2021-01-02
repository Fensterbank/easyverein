import fetch from 'node-fetch';
import { stringify } from 'query-string';

import {
  countContactDetails,
  getContactDetail,
  getContactDetails,
} from './contactDetail';
import { countMembers, getMember, getMembers } from './member';
import { getOrganization } from './organization';

const EASYVEREIN_HOST = 'https://easyverein.com/api/v1';
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

export const createFieldQuery = (query: readonly string[]) =>
  `{${query.join(',')}}`;

/**
 * Perform an authenticated GET request to the given url.
 * @param url The url to fetch
 */
export const performRequest = (url: string) =>
  fetch(url.startsWith('http') ? url : `${EASYVEREIN_HOST}${url}`, {
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  });

/**
 * Recursiveley performs requests to fetch paged data. If no next page is available, the array will be returned.
 * @param url The url to fetch
 * @param arr The result array to be filled
 */
export const performPagedRequest = (url: string, arr: any[]) => {
  return performRequest(url)
    .then((response) => response.json())
    .then((json) => {
      arr.push(...json.results);
      if (!json.next) return arr;
      return performPagedRequest(json.next, arr);
    });
};

export const Client = (token: string) => {
  if (!token)
    throw new Error(
      'Please specify the easyVerein® token for authenticated requests.'
    );

  TOKEN = token;

  return {
    getMember: getMember,
    getMembers: getMembers,
    countMembers: countMembers,
    getContactDetail: getContactDetail,
    getContactDetails: getContactDetails,
    countContactDetails: countContactDetails,
    getOrganization: getOrganization,
  };
};
