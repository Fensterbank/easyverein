
import { Collection, ContactDetail } from '../types';

import {
  createParameterizedApiRoute,
  performPagedRequest,
  performRequest,
} from '.';

/**
 * Returns the contact detail with the given ID
 * @param id - The id of the member.
 * @param query - String containing fields to query for, e.g. '{id,contactDetails{id,name},org{id,name,short},email,membershipNumber}'. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getContactDetail = (
  id: string,
  query?: string
): Promise<ContactDetail> =>
  performRequest(
    createParameterizedApiRoute(`/contact-details/${id}`, {
      query: query,
    })
  );

/**
 * Returns all contact details by fetching all pages
 * @param query - String containing fields to query for, e.g. '{id,contactDetails{id,name},org{id,name,short},email,membershipNumber}'. It is highly recommended to use this to make the response as small as possible.
 * @returns A member object.
 */
export const getContactDetails = (
  query?: string
): Promise<ContactDetail[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/contact-details', {
      query: query,
    }),
    []
  );

/**
 * Returns the amount of contact details
 */
export const countContactDetails = (): Promise<number> =>
  performRequest(
    createParameterizedApiRoute('/contact-details', {
      query: '{id}',
    })
  )
    .then((response) => response.json)
    .then((json: Collection<ContactDetail>) => json.count);
