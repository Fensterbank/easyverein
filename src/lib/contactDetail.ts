
import { Collection, ContactDetail } from '../types';

import {
  createFieldQuery,
  createParameterizedApiRoute,
  performPagedRequest,
  performRequest,
} from '.';

/**
 * Returns the contact detail with the given ID
 * @param id - The id of the member.
 * @param query - The fields to query for. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getContactDetail = (
  id: string,
  query?: readonly string[]
): Promise<ContactDetail> =>
  performRequest(
    createParameterizedApiRoute(`/contact-details/${id}`, {
      query: query ? createFieldQuery(query) : undefined,
    })
  );

/**
 * Returns all contact details by fetching all pages
 * @param query - The fields to query for. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getContactDetails = (
  query?: readonly string[]
): Promise<ContactDetail[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/contact-details', {
      query: query ? createFieldQuery(query) : undefined,
    }),
    []
  );

/**
 * Returns the amount of contact details
 */
export const countContactDetails = (): Promise<number> =>
  performRequest(
    createParameterizedApiRoute('/contact-details', {
      query: createFieldQuery['id'],
    })
  )
    .then((response) => response.json)
    .then((json: Collection<ContactDetail>) => json.count);
