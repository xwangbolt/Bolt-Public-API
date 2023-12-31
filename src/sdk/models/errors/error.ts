/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { classToPlain, Expose } from "class-transformer";

export class ErrorT extends Error {
    /**
     * The type of error returned
     */
    @SpeakeasyMetadata()
    @Expose({ name: ".tag" })
    dotTag: string;

    /**
     * A human-readable error message, which might include information specific to
     *
     * @remarks
     * the request that was made.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    constructor(err?: ErrorT) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "ErrorT";
        Object.setPrototypeOf(this, ErrorT.prototype);
    }
}
