import InputWithLabel from "../../components/InputWithLabel";
import {useState} from "react";
import {User} from "../../model/interfaces";

export default function UserProfileDefaultPage() {
    const [editing, setEditing] = useState<boolean>(false);
    const [user, setUser] = useState<User>({});

    const handleStartEditiButtonClick = () => {
        setEditing(prevState => !prevState);
    }

    const handleSaveButtonClick = () => {
        //TODO: send data to backend, display error or success message
        setEditing(prevState => !prevState);
    }

    return(
        <div className="pt-20">
            <div className="space-y-6 w-[300px]">
                <h1>Vaši podatki</h1>
                <InputWithLabel handleChange={()=>{}} value="Alen" label="Ime" name="firstname" type="text" placeholder={""} disabled={!editing} />
                <InputWithLabel handleChange={()=>{}} value="Fridau" label="Priimek" name="lastname" type="text" placeholder={""} disabled={!editing} />
                <InputWithLabel handleChange={()=>{}} value="alen@gmail.com" label="Email" name="email" type="email" placeholder={""} disabled={!editing} />
                {editing?
                    <button className="button-default w-full" onClick={handleSaveButtonClick}>Potrdi</button>
                    :
                    <button className="button-default w-full" onClick={handleStartEditiButtonClick}>Sprememi podatke</button>
                }
            </div>
        </div>
    )
}