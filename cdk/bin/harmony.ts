#!/usr/bin/env node
import 'source-map-support/register';
import {ExtendedApp} from 'truemark-cdk-lib/aws-cdk';
import {HarmonyAdvancedStack} from '../lib/advanced';
import {HarmonyAccountStack} from '../lib/account';
import {HarmonyRegionStack} from '../lib/region';

const app = new ExtendedApp({
  standardTags: {
    automationTags: {
      id: 'harmony',
      url: 'https://github.com/truemark/harmony',
    },
  },
});

const stack = app.node.tryGetContext('stack');
if (!stack) {
  throw new Error('stack is required in context');
}
switch (stack) {
  case 'advanced':
    HarmonyAdvancedStack.fromContext(app, 'HarmonyAdvanced');
    break;
  case 'account':
    HarmonyAccountStack.fromContext(app, 'HarmonyAccount');
    break;
  case 'region':
    HarmonyRegionStack.fromContext(app, 'HarmonyRegion');
    break;
  default:
    throw new Error(`Unknown stack: ${stack}`);
}
