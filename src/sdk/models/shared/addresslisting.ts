/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AddressListing extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country_code" })
    countryCode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_default" })
    isDefault?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "locality" })
    locality: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_address1" })
    streetAddress1: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_address2" })
    streetAddress2?: string;
}

export class AddressListingInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country_code" })
    countryCode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "is_default" })
    isDefault?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "locality" })
    locality: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_address1" })
    streetAddress1: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street_address2" })
    streetAddress2?: string;
}
