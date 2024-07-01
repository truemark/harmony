# Harmony

This projects contains TrueMark account and organization level automation.

Note that TrueMark's Observability pattern is deployed from [Overwatch](https://github.com/truemark/overwatch)
and not this repository.

## Pre-requisites

 * AWS ControlTower is enabled
 * AWS SSO is enabled (must be in the same account as ControlTower)

## Stacks

The following stacks make up Harmony.

### Harmony Advanced
This stack deploys the following:
 - AccountFactory
 - Standard AWS Permission Sets for AWS SSO
 - Standard AWS Organization OUs
 - Standard set of Security Control Policies

## Harmony Account

This stack deploys the following:
 - Roles for automation
 - Optional Roles for TrueMark access

Note that this stack should go into the same region as Harmony Advanced is deployed into. 

## Harmony Regional
This stack deploys the following:
 - Turning off AWS Config Rules that are not needed


## Customer Specific Configurations

The following functionality is expected to be implemented in separate Terraform for CDK stacks on a per customer basis:

 - AWS SSO Configuration (SAML, etc)
 - Customer specific AWS SSO Permission Sets


