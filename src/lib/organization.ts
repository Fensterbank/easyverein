import { Collection, Organization } from '../types';

import {
  createParameterizedApiRoute,
  performRequest,
} from '.';

/**
 * Returns the organization
 * @returns An organization object.
 */
export const getOrganization = (query?: string): Promise<Organization> =>
  performRequest(
    createParameterizedApiRoute(`/organization/`, {
      query,
    })
  ).then((response: Collection<Organization>) =>
    response.results[0] ? response.results[0] : null
  );
