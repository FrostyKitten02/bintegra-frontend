import {ChangeEvent, HTMLInputTypeAttribute} from "react";


type InputEvent = "error" | "success" | "none";

type TextInputType = {
    event: InputEvent,
    readonly inputClass: string,
    readonly labelClass: string
    readonly messageClass?: string
}

const inputClassDefault = "test focus:border-gray-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer";
const inputClassSuccess = "test block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer";
const inputClassError = "test block py-2.5 px-0 w-full text-sm text-red-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer";


const labelClassDefault = "z-50 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
const labelClassSuccess = "z-50 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
const labelClassError = "z-50 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

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
        disabled,
    }:{
        // inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
        value?: string,
        label: string,
        name: string,
        type: HTMLInputTypeAttribute,
        placeholder: string,
        required?: boolean,
        event?: TextInputType
        message?: string
        disabled?: boolean
    }) {


    return (
        <div className="relative z-0">
            <input
                type= {type}
                name={name}
                id={name}
                placeholder=" "
                value={value??""}
                onChange={handleChange}
                className={event?.inputClass??defaultType.inputClass}
                required={required}
                disabled={disabled}
            />
            <label
                htmlFor={name}
                className={event?.labelClass??defaultType.labelClass}>
                {label}
            </label>
            {/*message != undefined && event != undefined?<p className={event.messageClass}>{message}</p>:null*/}
        </div>
    )
}
