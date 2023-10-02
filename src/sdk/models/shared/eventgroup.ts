/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EventGroupTag {
    Group = "group",
}

export enum EventGroupEventGroup {
    All = "all",
}

export class EventGroup extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: ".tag" })
    dotTag: EventGroupTag;

    @SpeakeasyMetadata()
    @Expose({ name: "event_group" })
    eventGroup: EventGroupEventGroup;
}