# Bolt-Public-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/Bolt-Public-API.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/Bolt-Public-API/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add https://github.com/speakeasy-sdks/Bolt-Public-API
```

## Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Bolt-Public-API
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddPaymentMethodResponse, AccountAddPaymentMethodSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import {
  AddressReferenceExplicitTag,
  AddressReferenceIdTag,
  PaymentMethodCreditCardNetwork,
  PaymentMethodCreditCardTag,
} from "Bolt-Public-API/dist/sdk/models/shared";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddPaymentMethodSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountAddPaymentMethod({
  requestBody: {
    dotTag: PaymentMethodCreditCardTag.CreditCard,
    billingAddress: {
      dotTag: AddressReferenceExplicitTag.Explicit,
      company: "ACME Corporation",
      countryCode: "US",
      email: "alice@example.com",
      firstName: "Alice",
      lastName: "Baker",
      locality: "San Francisco",
      phone: "+14155550199",
      postalCode: "94105",
      region: "CA",
      streetAddress1: "535 Mission St, Ste 1401",
      streetAddress2: "c/o Shipping Department",
    },
    bin: "411111",
    expiration: "2025-03",
    last4: "1004",
    network: PaymentMethodCreditCardNetwork.Visa,
    token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
  },
  xPublishableKey: "Investment",
}, operationSecurity).then((res: AccountAddPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations


## [account](docs/sdks/account/README.md)

* [accountAddPaymentMethod](docs/sdks/account/README.md#accountaddpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [accountAddressCreate](docs/sdks/account/README.md#accountaddresscreate) - Add an address
* [accountAddressDelete](docs/sdks/account/README.md#accountaddressdelete) - Delete an existing address
* [accountAddressEdit](docs/sdks/account/README.md#accountaddressedit) - Edit an existing address
* [accountExists](docs/sdks/account/README.md#accountexists) - Determine the existence of a Bolt account
* [accountGet](docs/sdks/account/README.md#accountget) - Retrieve account details
* [accountPaymentMethodDelete](docs/sdks/account/README.md#accountpaymentmethoddelete) - Delete an existing payment method

## [configuration](docs/sdks/configuration/README.md)

* [merchantCallbacksGet](docs/sdks/configuration/README.md#merchantcallbacksget) - Retrieve callback URLs for the merchant
* [merchantCallbacksUpdate](docs/sdks/configuration/README.md#merchantcallbacksupdate) - Update callback URLs for the merchant
* [merchantIdentifiersGet](docs/sdks/configuration/README.md#merchantidentifiersget) - Retrieve identifiers for the merchant

## [payments](docs/sdks/payments/README.md)

* [guestPaymentsInitialize](docs/sdks/payments/README.md#guestpaymentsinitialize) - Initialize a Bolt payment for guest shoppers
* [paymentsInitialize](docs/sdks/payments/README.md#paymentsinitialize) - Initialize a Bolt payment for logged in shoppers

## [testing](docs/sdks/testing/README.md)

* [testingAccountCreate](docs/sdks/testing/README.md#testingaccountcreate) - Create a test account
* [testingCreditCardGet](docs/sdks/testing/README.md#testingcreditcardget) - Retrieve a test credit card, including its token
* [testingShipmentTrackingCreate](docs/sdks/testing/README.md#testingshipmenttrackingcreate) - Simulate a shipment tracking update

## [webhooks](docs/sdks/webhooks/README.md)

* [webhooksCreate](docs/sdks/webhooks/README.md#webhookscreate) - Create a webhook to subscribe to certain events
* [webhooksDelete](docs/sdks/webhooks/README.md#webhooksdelete) - Delete an existing webhook
* [webhooksGet](docs/sdks/webhooks/README.md#webhooksget) - Retrieve information for a specific webhook
* [webhooksGetAll](docs/sdks/webhooks/README.md#webhooksgetall) - Retrieve information about all existing webhooks
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:


<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
