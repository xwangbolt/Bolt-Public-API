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