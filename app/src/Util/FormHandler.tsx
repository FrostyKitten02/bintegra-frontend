import {ChangeEvent, Dispatch, FormEvent, HTMLInputTypeAttribute, SetStateAction} from "react";


export class FormHandler<T> {
    private state: [T, Dispatch<SetStateAction<T>>];

    constructor(state: [T, Dispatch<SetStateAction<T>>]) {
        this.state = state;
    }


    public handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        const type: HTMLInputTypeAttribute = event.target.type;


    }

    public handleSubmit(event: FormEvent<HTMLFormElement>) {

    }

    private setAtribute(key: string, value: string, type: HTMLInputTypeAttribute) {
        const stringTypes = ["email", "password", "text"];
        const numberTypes = ["number"]

        if (stringTypes.includes(type)) {
            //TODO: try parsing!!!!

        } else if (numberTypes.includes(type)) {

        }


    }

}




