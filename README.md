# Harmony

This projects contains TrueMark account and organization level automation.

Note that TrueMark's Observability pattern is deployed from [Overwatch](https://github.com/truemark/overwatch)
and not this repository.

## Pre-requisites

 * AWS ControlTower is enabled
 * AWS SSO is enabled (must be in the same account as ControlTower)

## Stacks

Organization Level
 - AccountFactory
 - Standard AWS Permission Sets for AWS SSO
 - Standard AWS Organization OUs
 - Standard set of Security Control Policies

Account Level
 - Roles for automation
 - Optional Roles for TrueMark access

Account + Region Level
 - Turning off AWS Config Rules that are not needed


## Customer Specific Configurations

The following functionality is expected to be implemented in separate Terraform for CDK stacks on a per customer basis:
 - AWS SSO Configuration (SAML, etc)
 - Customer specific AWS SSO Permission Sets


