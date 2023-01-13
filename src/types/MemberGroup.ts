import { Organization } from '.';

export type MemberGroup = {
  readonly id: number;
  readonly org: Organization;
  readonly _deleteAfterDate?: string;
  readonly _deletedBy?: number;
  readonly name: string;
  readonly color: string;
  readonly short: string;
  readonly userGroupAccount: number;
  readonly paymentAmount?: number;
  readonly assignmentDeleteAfterBooking: boolean;
  readonly usePaymentFormula: boolean;
  readonly paymentFormula: string;
  readonly paymentInterval: number;
  readonly nameOnInvoice: string;
  readonly descriptionOnInvoice: string;
  readonly showInApplicationform: boolean;
  readonly agePermission: unknown;
  readonly nextGroup: MemberGroup;
  readonly taxRate: unknown;
  readonly billingAccount: unknown;
  readonly costCentre: string;
  // Nutzerberechtigung: Dateifreigabe - Beispiel: "n" für false oder "y" für true
  readonly user_shares: string;
  // Nutzerberechtigung: Finanzen - Beispiel: "n" für false oder "y" für true
  readonly user_bookings: string;
  // user protocols - Beispiel: "n" für false oder "y" für true
  readonly user_protocols: string;
  // Nutzerberechtigung: Mitglieder - Beispiel: "n" für false oder "y" für true
  readonly user_members: string;
  // Nutzerberechtigung: Mitglieder Beschränkung - Beispiel: "n" für false oder "y" für true
  readonly user_members_groupaccess: string;
  // Nutzerberechtigung: Mitgliedschaftsbescheinigung - Beispiel: "n" für false oder "y" für true
  readonly user_membershipCte: string;
  // Nutzerberechtigung: Bearbeiten - Beispiel: "n" für false oder "y" für true
  readonly user_edit: string;
  // Nutzerberechtigung: Forum - Beispiel: "n" für false oder "y" für true
  readonly user_forum: string;
  // Nutzerberechtigung: schwarzes Brett (outdated) - Beispiel: "n" für false oder "y" für true
  readonly user_board: string;
  // Nutzerberechtigung: Links im schwarzen Brett (outdated) - Beispiel: "n" für false oder "y" für true
  readonly user_boardLinks: string;
  // Nutzerberechtigung: Kalender Import/Export - Beispiel: "n" für false oder "y" für true
  readonly user_importcalendar: string;
  // Nutzerberechtigung: Belege einreichen - Beispiel: "n" für false oder "y" für true
  readonly user_invoiceRequest: string;
  // Nutzerberechtigung: Ausleihe - Beispiel: "n" für false oder "y" für true
  readonly user_inventory: string;
};
