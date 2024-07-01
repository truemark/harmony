import {ExtendedStack, ExtendedStackProps} from 'truemark-cdk-lib/aws-cdk';
import {HarmonyAdvanced} from '../advanced/harmony-advanced';
import {Construct} from 'constructs';
import {App} from 'aws-cdk-lib';

export type HarmonyAccountStackProps = ExtendedStackProps;

export class HarmonyAccountStack extends ExtendedStack {
  constructor(scope: Construct, id: string, props: HarmonyAccountStackProps) {
    super(scope, id, props);
    new HarmonyAdvanced(this, 'Default', {});
  }

  static fromContext(app: App, id: string): HarmonyAccountStack {
    return new HarmonyAccountStack(app, id, {});
  }
}
