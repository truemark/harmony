import {ExtendedConstruct} from 'truemark-cdk-lib/aws-cdk';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HarmonyAdvancedProps {}

export class HarmonyAdvanced extends ExtendedConstruct {
  constructor(
    scope: ExtendedConstruct,
    id: string,
    props: HarmonyAdvancedProps
  ) {
    super(scope, id);
  }
}
