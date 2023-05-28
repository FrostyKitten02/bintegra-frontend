import InputWithLabel from "../../components/InputWithLabel";
import {ChangeEvent, useState} from "react";
import {User} from "../../model/interfaces";
import FormHandler from "../../Util/FormHandler";
import { PencilIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function UserProfileDefaultPage() {
    const [editing, setEditing] = useState<boolean>(false);
    const [user, setUser] = useState<User>({});

    const handleStartEditiButtonClick = () => {
        setEditing(prevState => !prevState);
    }

    const handleSaveButtonClick = () => {
        //TODO: send data to backend, display error or success message
        setEditing(false);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => FormHandler.handleInputChange(event, prevState));
    }

    return(
        <div className="pt-20">
            <div className="space-y-6 w-[300px]">
                <div className="flex justify-center items-center gap-x-4">
                    <h1>Vaši podatki</h1>
                    <button onClick={handleStartEditiButtonClick}>
                        {editing?<XMarkIcon className="h-6 w-6 text-black" />:<PencilIcon className="h-6 w-6 text-black" />}
                    </button>
                </div>
                <InputWithLabel handleChange={handleInputChange} value={user.firstname} label="Ime" name="firstname" type="text" placeholder={""} disabled={!editing} />
                <InputWithLabel handleChange={handleInputChange} value={user.lastname} label="Priimek" name="lastname" type="text" placeholder={""} disabled={!editing} />
                <InputWithLabel handleChange={handleInputChange} value={user.email} label="Email" name="email" type="email" placeholder={""} disabled={!editing} />
                <button className="button-default w-full" onClick={handleSaveButtonClick} disabled={!editing}>Potrdi</button>
            </div>
        </div>
    )
}