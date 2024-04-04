/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as MultionApi from "../../api";
import * as core from "../../core";
export declare const ValidationError: core.serialization.ObjectSchema<serializers.ValidationError.Raw, MultionApi.ValidationError>;
export declare namespace ValidationError {
    interface Raw {
        loc: serializers.ValidationErrorLocItem.Raw[];
        msg: string;
        type: string;
    }
}