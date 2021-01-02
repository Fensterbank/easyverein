import { Collection } from '../types';
import { Member } from '../types/Member';

import {
  createFieldQuery,
  createParameterizedApiRoute,
  performPagedRequest,
  performRequest,
} from '.';

/**
 * Returns the member with the given ID
 * @param id - The id of the member.
 * @param query - The fields to query for. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getMember = (
  id: string,
  query?: readonly string[]
): Promise<Member> =>
  performRequest(
    createParameterizedApiRoute(`/member/${id}`, {
      query: query ? createFieldQuery(query) : undefined,
    })
  );

/**
 * Returns all members by fetching all pages
 * @param query - The fields to query for. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getMembers = (query?: readonly string[]): Promise<Member[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/member', {
      query: query ? createFieldQuery(query) : undefined,
    }),
    []
  );

/**
 * Returns the amount of members
 */
export const countMembers = (): Promise<number> =>
  performRequest(
    createParameterizedApiRoute('/members', { query: createFieldQuery['id'] })
  )
    .then((response) => response.json)
    .then((json: Collection<Member>) => json.count);
