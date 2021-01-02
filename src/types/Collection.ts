import { Descriptions } from "./Descriptions";
import { VerboseNames } from "./VerboseNames";

export type Collection<t> = {
  readonly count: number;
  readonly next?: string;
  readonly previous?: string;
  readonly verbose_names: VerboseNames;
  readonly descriptions: Descriptions;
  readonly results: readonly t[];
};
