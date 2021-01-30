import { Collection, Organization } from '../types';

import {
  createParameterizedApiRoute,
  performRequest,
} from '.';

/**
 * Returns the organization
 * @returns An organization object.
 */
export const getOrganization = (): Promise<Organization> =>
  performRequest(
    createParameterizedApiRoute(`/organization`, {
    })
  ).then((response: Collection<Organization>) =>
    response.results[0] ? response.results[0] : null
  );
