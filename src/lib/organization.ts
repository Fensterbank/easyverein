import { Collection, Organization } from '../types';
import { Member } from '../types/Member';

import {
  createFieldQuery,
  createParameterizedApiRoute,
  performRequest,
} from '.';

/**
 * Returns the organization
 * Since organization routes aren't working properly for normal users, we fetch the first page of members and take the first member's org.
 * @returns A organization object.
 */
export const getOrganization = (): Promise<Organization> =>
  performRequest(
    createParameterizedApiRoute(`/member`, {
      query: createFieldQuery(['org']),
    })
  ).then((response: Collection<Member>) =>
    response.results[0] ? response.results[0].org : null
  );
