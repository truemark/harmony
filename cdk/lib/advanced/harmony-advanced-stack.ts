import {ExtendedStack, ExtendedStackProps} from 'truemark-cdk-lib/aws-cdk';
import {Construct} from 'constructs';
import {HarmonyAdvanced} from './harmony-advanced';
import {App} from 'aws-cdk-lib';

export type HarmonyAdvancedStackProps = ExtendedStackProps;

export class HarmonyAdvancedStack extends ExtendedStack {
  constructor(scope: Construct, id: string, props: HarmonyAdvancedStackProps) {
    super(scope, id, props);
    new HarmonyAdvanced(this, 'Default', {});
  }

  static fromContext(app: App, id: string): HarmonyAdvancedStack {
    return new HarmonyAdvancedStack(app, id, {});
  }
}
