import {
  createParameterizedApiRoute,
  performPagedRequest,
  performRequest,
} from '.';
import { Invoice } from '../types/Invoice';

/**
 * Returns the invoice with the given ID
 * @param id - The id of the invoice
 * @param query - String containing fields to query for, e.g. '{id,kind,relatedBookings{id,amount,description}}'. It is highly recommended to use this to make the response as small as possible.
 * @returns An Invoice object.
 */
export const getInvoice = (
  id: number,
  query?: string
): Promise<Invoice> =>
  performRequest(
    createParameterizedApiRoute(`/invoice/${id}/`, {
      query: query,
    })
  );

/**
 * Return all invoices by fetching all pages
 * @param query - String containing fields to query for, e.g. '{id,kind,relatedBookings{id,amount,description}}'. It is highly recommended to use this to make the response as small as possible.
 * @returns An array of Invoice objects.
 */
export const getInvoices = (
  query?: string
): Promise<Invoice[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/invoice/', {
      query: query,
    }),
    []
  );

export const getInvoicesBy = (
  filter: object,
  query?: string
): Promise<Invoice[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/invoice/', {
      ...filter,
      query: query
    }
    ),
    []
  );
