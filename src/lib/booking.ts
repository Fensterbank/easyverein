import {
  createParameterizedApiRoute,
  performPagedRequest,
  performRequest,
} from '.';
import { Booking } from '../types/Booking';

/**
 * Returns the bookings with the given ID
 * @param id - The id of the invoice
 * @param query - String containing fields to query for, e.g. '{id,amount,relatedInvoice{id,totalPrice}}'. It is highly recommended to use this to make the response as small as possible.
 * @returns A Booking object.
 */
export const getBooking = (
  id: number,
  query?: string
): Promise<Booking> =>
  performRequest(
    createParameterizedApiRoute(`/booking/${id}/`, {
      query: query,
    })
  );

/**
 * Return all bookings by fetching all pages
 * @param query -  String containing fields to query for, e.g. '{id,amount,relatedInvoice{id,totalPrice}}'. It is highly recommended to use this to make the response as small as possible.
 * @returns An array of Booking objects.
 */
export const getBookings = (
  query?: string
): Promise<Booking[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/booking/', {
      query: query,
    }),
    []
  );

export const getBookingsBy = (
  filter: unknown[],
  query?: string
): Promise<Booking[]> =>
  performPagedRequest(
    createParameterizedApiRoute('/booking/', {
      ...filter,
      query: query
    }
    ),
    []
  );
