# Payments
(*payments*)

## Overview

Use the Payments API to tokenize and process alternative payment methods including Paypal with Bolt. This API is for the Bolt
Accounts package.


### Available Operations

* [guestPaymentsInitialize](#guestpaymentsinitialize) - Initialize a Bolt payment for guest shoppers
* [paymentsInitialize](#paymentsinitialize) - Initialize a Bolt payment for logged in shoppers

## guestPaymentsInitialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for guest shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { GuestPaymentsInitializeResponse } from "Bolt-Public-API/dist/sdk/models/operations";
import { AddressReferenceExplicitTag, AddressReferenceIdTag, PaymentMethodPaypalTag } from "Bolt-Public-API/dist/sdk/models/shared";

const sdk = new BoltPublicAPI({
  security: {
    apiKey: "",
  },
});

sdk.payments.guestPaymentsInitialize({
  xPublishableKey: "Soap whereas input",
  guestPaymentMethodInitializeRequestInput: {
    cart: {
      amounts: {
        currency: "USD",
        tax: 900,
        total: 900,
      },
      discounts: [
        {
          amounts: {
            currency: "USD",
            tax: 900,
            total: 900,
          },
          code: "SUMMER10DISCOUNT",
          detailsUrl: "https://www.example.com/SUMMER-SALE",
        },
      ],
      displayId: "215614191",
      items: [
        {
          description: "Large tote with Bolt logo.",
          imageUrl: "https://www.example.com/products/123456/images/1.png",
          name: "Bolt Swag Bag",
          quantity: 1,
          reference: "item_100",
          totalAmount: 1000,
          unitPrice: 1000,
        },
      ],
      orderDescription: "Order #1234567890",
      orderReference: "order_100",
      shipments: [
        {
          address: {
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
          carrier: "FedEx",
          cost: {
            currency: "USD",
            tax: 900,
            total: 900,
          },
        },
      ],
    },
    paymentMethod: {
      dotTag: PaymentMethodPaypalTag.Paypal,
      cancel: "www.example.com/handle_paypal_cancel",
      success: "www.example.com/handle_paypal_success",
    },
  },
}).then((res: GuestPaymentsInitializeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GuestPaymentsInitializeRequest](../../models/operations/guestpaymentsinitializerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GuestPaymentsInitializeResponse](../../models/operations/guestpaymentsinitializeresponse.md)>**


## paymentsInitialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for logged in shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { PaymentsInitializeResponse, PaymentsInitializeSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import {
  AddressReferenceExplicitTag,
  AddressReferenceIdTag,
  PaymentMethodSavedPaymentMethodTag,
} from "Bolt-Public-API/dist/sdk/models/shared";

const sdk = new BoltPublicAPI();
const operationSecurity: PaymentsInitializeSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.payments.paymentsInitialize({
  xPublishableKey: "possimus",
  paymentMethodInitializeRequestInput: {
    cart: {
      amounts: {
        currency: "USD",
        tax: 900,
        total: 900,
      },
      discounts: [
        {
          amounts: {
            currency: "USD",
            tax: 900,
            total: 900,
          },
          code: "SUMMER10DISCOUNT",
          detailsUrl: "https://www.example.com/SUMMER-SALE",
        },
      ],
      displayId: "215614191",
      items: [
        {
          description: "Large tote with Bolt logo.",
          imageUrl: "https://www.example.com/products/123456/images/1.png",
          name: "Bolt Swag Bag",
          quantity: 1,
          reference: "item_100",
          totalAmount: 1000,
          unitPrice: 1000,
        },
      ],
      orderDescription: "Order #1234567890",
      orderReference: "order_100",
      shipments: [
        {
          address: {
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
          carrier: "FedEx",
          cost: {
            currency: "USD",
            tax: 900,
            total: 900,
          },
        },
      ],
    },
    paymentMethod: {
      dotTag: PaymentMethodSavedPaymentMethodTag.SavedPaymentMethod,
      id: "id",
    },
  },
}, operationSecurity).then((res: PaymentsInitializeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PaymentsInitializeRequest](../../models/operations/paymentsinitializerequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PaymentsInitializeSecurity](../../models/operations/paymentsinitializesecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PaymentsInitializeResponse](../../models/operations/paymentsinitializeresponse.md)>**

