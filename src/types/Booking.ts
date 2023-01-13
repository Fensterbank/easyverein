import { Invoice } from './Invoice';
import { Organization } from './Organization';

export type Booking = {
  readonly id: number;
  readonly relatedInvoice: Invoice[];
  readonly org: Organization;
  readonly model: string;
  readonly amount: number;
  //readonly bankAccount?: BankAccount;
  readonly billingAccount: string;
  readonly _deleteAfterDate?: string;
  readonly _deletedBy?: string;
  readonly description: string;
  readonly date: string;
  readonly importDate?: number;
  readonly receiver: string;
  readonly billingId: string;
  readonly blocked: boolean;
  readonly paymentDifference: string;
  readonly counterpartIban: string;
  readonly counterpartBic: string;
  readonly twingleDonation: false;
};
