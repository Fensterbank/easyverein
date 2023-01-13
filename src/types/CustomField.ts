import { Organization } from '.';

export type CustomField = {
  readonly id: number;
  readonly org: Organization;
  readonly name: string;
  readonly color?: string;
  readonly short?: string;
  readonly placeholder: string;
  readonly _deleteAfterDate?: Date;
  readonly _deletedBy?: string;
  readonly description: string;
  readonly member_show: boolean;
  readonly member_edit: boolean;
  readonly member_dsgvo: boolean;
  readonly position: number;
  readonly collection: any;
  readonly settings_type: string;
  readonly kind: string;
};
