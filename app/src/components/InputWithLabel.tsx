import {ChangeEvent, HTMLInputTypeAttribute} from "react";


type InputEvent = "error" | "success" | "none";

type TextInputType = {
    event: InputEvent,
    readonly inputClass: string,
    readonly labelClass: string
    readonly messageClass?: string
}

const inputClassDefault= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
const inputClassError = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500";
const inputClassSuccess = "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5";


const labelClassDefault = "block mb-2 text-sm font-medium text-gray-900";
const labelClassError = "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";
const labelClassSuccess = "block mb-2 text-sm font-medium text-green-700";

const messageClassError = "mt-2 text-sm text-red-600 font-medium"
const messageClassSuccess = "mt-2 text-sm text-green-600 font-medium"
export const successType: TextInputType = {
    event: "success",
    inputClass: inputClassSuccess,
    labelClass: labelClassSuccess,
    messageClass: messageClassSuccess
} as const;

export const errorType: TextInputType = {
    event: "error",
    inputClass: inputClassError,
    labelClass: labelClassError,
    messageClass: messageClassError
} as const;

export const defaultType: TextInputType = {
    event: "none",
    inputClass: inputClassDefault,
    labelClass: labelClassDefault,
    messageClass: ""
} as const;

export default function InputWithLabel(
    {
        // inputProps,
        handleChange,
        value,
        label,
        name,
        type,
        placeholder,
        required,
        event,
        message,
    }:{
        // inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
        value: string,
        label: string,
        name: string,
        type: HTMLInputTypeAttribute,
        placeholder: string,
        required?: boolean,
        event?: TextInputType
        message?: string
    }) {


    return (
        <div>
            <label htmlFor={name} className={event?.labelClass??defaultType.labelClass}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className={event?.inputClass??defaultType.inputClass}
                placeholder={placeholder}
                required={required}
            />
            {message != undefined && event != undefined?<p className={event.messageClass}>{message}</p>:null}
        </div>
    )
}
