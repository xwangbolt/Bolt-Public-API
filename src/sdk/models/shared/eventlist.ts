/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EventListTag {
    List = "list",
}

export enum EventListEventList {
    Payment = "payment",
    Credit = "credit",
    Capture = "capture",
    Void = "void",
    Auth = "auth",
    Pending = "pending",
    RejectedIrreversible = "rejected_irreversible",
    RejectedReversible = "rejected_reversible",
    FailedPayment = "failed_payment",
    NewsletterSubscription = "newsletter_subscription",
    RiskInsights = "risk_insights",
    CreditCardDeleted = "credit_card_deleted",
}

export class EventList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: ".tag" })
    dotTag: EventListTag;

    @SpeakeasyMetadata()
    @Expose({ name: "event_list" })
    eventList: EventListEventList[];
}