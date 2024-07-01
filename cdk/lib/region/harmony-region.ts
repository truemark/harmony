import {Construct} from 'constructs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HarmonyRegionProps {}

export class HarmonyRegion extends Construct {
  constructor(scope: Construct, id: string, props: HarmonyRegionProps) {
    super(scope, id);
  }
}
