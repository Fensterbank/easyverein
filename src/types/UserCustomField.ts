import { Member, Organization } from '.';
import { CustomField } from './CustomField';

export type UserCustomField = {
  readonly id?: number;
  readonly org?: Organization;
  readonly userObject?: Member;
  readonly customField: CustomField | string | number;
  value: string;
  readonly model?: string;
  readonly _deleteAfterDate?: Date;
  readonly _deletedBy?: string;
};
