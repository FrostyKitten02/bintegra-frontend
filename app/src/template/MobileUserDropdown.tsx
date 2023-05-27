import {UserCircleIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Paths from "../Paths";

const UserDropdownItem = ({ name, path }: { name:string, path:string }) => {
    const navigation = useNavigate();
    return(
        <li className = "text-right py-2  border-t border-t-gray-300">
            <a className = " "
               onClick={ () => navigation(path) }>
                {name}
            </a>
        </li>
    )
}

export default function MobileUserDropdown() {
    const [dropdownState, setDropdownState] = useState<boolean>(false);

    return (
        <div>
            <div className="flex justify-end pb-1">
                <button onClick={() => setDropdownState(prevState => !prevState)} className="flex">
                    <UserCircleIcon className="h-8 w-8 text-gray-500"/>
                </button>
            </div>
            <div className={`${!dropdownState ? "hidden" : "block"}`}>
                <div>
                    <ul>
                        <UserDropdownItem name="Prijava" path={Paths.LOGIN} />
                        <UserDropdownItem name="Registracija" path={Paths.REGISTER} />
                        <UserDropdownItem name="Profil" path={Paths.USER_PROFILE} />
                    </ul>
                </div>
            </div>
        </div>
    )
}