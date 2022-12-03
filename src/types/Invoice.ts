import { Booking } from './Booking';
import { ContactDetail } from './ContactDetail';
import { Organization } from './Organization';

export type Invoice = {
  readonly id: number;
  readonly relatedBookings?: readonly Booking[];
  readonly org: Organization;
  readonly model: string;
  readonly path: string;
  readonly relatedAddress: ContactDetail;
  //readonly payedFromUser?: Member;
  //readonly approvedFromAdmin?: boolean;
  //readonly canceledInvoce?: boolean;
  readonly charges: readonly unknown[];
  //readonly bankAccount: BankAccount;
  //readonly InvoiceItems: InvoiceItems;
  readonly _deleteAfterDate?: string;
  readonly _deletedBy?: number;
  readonly gross: boolean;
  readonly cancellationDescription?: string;
  //readonly templateName?: string;
  readonly date: string;
  readonly dateItHappend?: string;
  readonly dateSend?: string;
  readonly invNumber: string;
  readonly receiver: string;
  readonly description: string;
  readonly totalPrice: number;
  readonly tax: number;
  readonly kind: string;
  readonly refNumber?: string;
  readonly paymentDifference: number;
  readonly isDraft: boolean;
  readonly isTemplate: boolean;
  readonly paymentInformation: string;
  readonly isRequest: boolean;
  readonly taxRate: number;
  readonly taxName?: string;
  readonly actualCallStateName: string;
  readonly callStateDelayDays: number;
  readonly accnumber: number;
  readonly guid: string;
  readonly selectionAcc: number;
};