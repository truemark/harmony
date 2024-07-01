import {ExtendedStack, ExtendedStackProps} from 'truemark-cdk-lib/aws-cdk';
import {HarmonyRegion} from './harmony-region';
import {Construct} from 'constructs';
import {App} from 'aws-cdk-lib';

export type HarmonyRegionStackProps = ExtendedStackProps;

export class HarmonyRegionStack extends ExtendedStack {
  constructor(scope: Construct, id: string, props: HarmonyRegionStackProps) {
    super(scope, id, props);
    new HarmonyRegion(this, 'Default', {});
  }

  static fromContext(app: App, id: string): HarmonyRegionStack {
    return new HarmonyRegionStack(app, id, {});
  }
}
