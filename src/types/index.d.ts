import { ContactDetail } from './ContactDetail';
import { Descriptions } from './Descriptions';
import { Member } from './Member';
import { Organization } from './Organization';
import { VerboseNames } from './VerboseNames';

export type Collection<t> = {
  readonly count: number;
  readonly next?: string;
  readonly previous?: string;
  readonly verbose_names: VerboseNames;
  readonly descriptions: Descriptions;
  readonly results: readonly t[];
};

export { ContactDetail, Descriptions, Member, Organization, VerboseNames };
