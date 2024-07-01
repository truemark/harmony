import {ExtendedConstruct} from 'truemark-cdk-lib/aws-cdk';
import {Construct} from 'constructs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HarmonyAccountProps {}

export class HarmonyAccount extends ExtendedConstruct {
  constructor(scope: Construct, id: string, props: HarmonyAccountProps) {
    super(scope, id);
  }
}
