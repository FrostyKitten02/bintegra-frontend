import {ChangeEvent, DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes} from "react";


export default function TextInputWithLabel(
    {
        // inputProps,
        handleChange,
        value,
        label,
        name,
        type,
        placeholder,
        required,
    }:{
        // inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
        value: string,
        label: string,
        name: string,
        type: HTMLInputTypeAttribute,
        placeholder: string,
        required?: boolean,
    }) {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}
