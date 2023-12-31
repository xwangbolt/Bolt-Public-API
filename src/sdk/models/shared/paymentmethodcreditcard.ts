/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PaymentMethodCreditCardTag {
    CreditCard = "credit_card",
}

/**
 * The credit card network.
 */
export enum PaymentMethodCreditCardNetwork {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Discover = "discover",
    Jcb = "jcb",
    Unionpay = "unionpay",
    Alliancedata = "alliancedata",
    Citiplcc = "citiplcc",
}

export class PaymentMethodCreditCardOutput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: ".tag" })
    dotTag: PaymentMethodCreditCardTag;

    @SpeakeasyMetadata()
    @Expose({ name: "billing_address" })
    billingAddress: any;

    /**
     * The ID of credit card's billing address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_address_id" })
    billingAddressId?: string;

    /**
     * The expiration date of the credit card. TODO TO MAKE EXPIRATION REUSABLE
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiration" })
    expiration: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The last 4 digits of the credit card number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4: string;

    /**
     * The credit card network.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network: PaymentMethodCreditCardNetwork;
}

export class PaymentMethodCreditCardInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: ".tag" })
    dotTag: PaymentMethodCreditCardTag;

    @SpeakeasyMetadata()
    @Expose({ name: "billing_address" })
    billingAddress: any;

    /**
     * The Bank Identification Number for the credit card. This is typically the first 4-6 digits of the credit card number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bin" })
    bin: string;

    /**
     * The expiration date of the credit card. TODO TO MAKE EXPIRATION REUSABLE
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiration" })
    expiration: string;

    /**
     * The last 4 digits of the credit card number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4: string;

    /**
     * The credit card network.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network: PaymentMethodCreditCardNetwork;

    /**
     * The Bolt token associated to the credit card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token: string;
}
