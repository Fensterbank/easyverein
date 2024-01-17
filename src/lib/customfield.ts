import {
  createParameterizedApiRoute,
  getApiVersion,
  performPagedRequest,
  performRequest,
} from '.';
import { CustomField } from '../types/CustomField';
import { UserCustomField } from '../types/UserCustomField';

export const getCustomField = (
  id: number,
  query?: string
): Promise<CustomField> => {
  if (!['v1.5', 'v1.6'].includes(getApiVersion())) {
    throw new Error(
      "This method can't be used with an API Version lower then v1.5"
    );
  }
  return performRequest(
    createParameterizedApiRoute(`/custom-field/${id}`, { query: query })
  );
};

/**
 * Returns all custom fields by fetching all pages
 * Only available from API version v1.5 and above
 *
 * @param query - String containing fields for query e.g. '{id,name,description}'
 * @param name - Filters request for given name
 * @param kind - Filters request for given kind of fields
 * @return An array of CustomField objects.
 */
export const getCustomFields = (
  query?: string,
  name?: string,
  kind?: string
): Promise<CustomField[]> => {
  if (!['v1.5', 'v1.6'].includes(getApiVersion())) {
    throw new Error(
      "This method can't be used with an API Version lower then v1.5"
    );
  }

  return performPagedRequest(
    createParameterizedApiRoute('/custom-field/', {
      query: query,
      name: name,
      kind: kind,
    }),
    []
  );
};

export const createUserCustomField = (
  memberId: number,
  data: UserCustomField
): Promise<UserCustomField> => {
  if (!['v1.5', 'v1.6'].includes(getApiVersion())) {
    throw new Error(
      "This method can't be used with an API Version lower then v1.5"
    );
  }
  return performRequest(`/member/${memberId}/custom-fields`, 'POST', data);
};

export const updateUserCustomField = (
  memberId: number,
  cfId: number,
  data: UserCustomField
): Promise<UserCustomField> => {
  if (!['v1.5', 'v1.6'].includes(getApiVersion())) {
    throw new Error(
      "This method can't be used with an API Version lower then v1.5"
    );
  }
  return performRequest(
    `/member/${memberId}/custom-fields/${cfId}`,
    'PATCH',
    data
  );
};
