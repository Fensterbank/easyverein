import { Collection, Member } from '../types';

import {
  createParameterizedApiRoute,
  performPagedRequest,
  performRequest,
} from '.';

/**
 * Returns the member with the given ID
 * @param id - The id of the member.
 * @param query - String containing fields to query for, e.g. '{id,contactDetails{id,name},org{id,name,short},email,membershipNumber}'. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getMember = (
  id: string,
  query?: string
): Promise<Member> =>
  performRequest(
    createParameterizedApiRoute(`/member/${id}/`, {
      query: query,
    })
  );

/**
 * Returns all members by fetching all pages
 * @param query - String containing fields to query for, e.g. '{id,contactDetails{id,name},org{id,name,short},email,membershipNumber}'. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getMembers = (query?: string): Promise<Member[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/member/', {
      query: query,
    }),
    []
  );

/**
 * Returns the amount of members
 */
export const countMembers = (): Promise<number> =>
  performRequest(
    createParameterizedApiRoute('/members/', { query: '{id}' })
  )
    .then((response) => response.json)
    .then((json: Collection<Member>) => json.count);
