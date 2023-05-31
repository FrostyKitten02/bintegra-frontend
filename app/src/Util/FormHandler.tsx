import {ChangeEvent, HTMLInputTypeAttribute} from "react";


export default class FormHandler {

    public static handleInputChange<T>(event: ChangeEvent<HTMLInputElement>, obj: T): T {
        const value = event.target.value;
        const name = event.target.name;
        const type: HTMLInputTypeAttribute = event.target.type;
        return this.setAtribute<T>(name, value, type, obj);
    }

    private static setAtribute<T>(key: string, value: string, type: HTMLInputTypeAttribute, obj: T): T {
        const stringTypes = ["email", "password", "text"];
        const numberTypes = ["number"];

        if (stringTypes.includes(type)) {
            return {...obj, [key]: value};
        } else if (numberTypes.includes(type)) {
            try {
                if (!Number.isNaN(value)) {
                    return {...obj, [key]: Number.parseFloat(value)};
                }
            } catch (e) {

            }
        }
        return obj;
    }
}




