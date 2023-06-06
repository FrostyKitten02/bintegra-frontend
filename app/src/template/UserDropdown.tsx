import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Dropdown} from "flowbite-react";
import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import Paths from "../Paths";
import {IPageContext, PageContext} from "../components/PageContextProvider";

/*<UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500"/> */

export default function UserDropdown() {
    const navigate = useNavigate();
    const context = useContext<IPageContext>(PageContext);
    return (
        <Dropdown
            inline
            color="white"
            className="w-[250px] overflow-hidden"
            arrowIcon={false}
            trigger="hover"
            label={
                <UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-white"/>
            }
        >
            <Dropdown.Header>
                <span className="block p-1 text-sm">
                    Uporabniško ime
                </span>
            </Dropdown.Header>
            <Dropdown.Item
                onClick={() => navigate(Paths.USER_PORTAL_BASE_PATH)}
            >
                <span className="p-1">
                    Moj portal
                </span>
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => navigate(Paths.REGISTER)}
            >
                <span className="p-1">
                    Registracija
                </span>
            </Dropdown.Item>
            <Dropdown.Item
                className=""
                onClick={() => navigate(Paths.LOGIN)}
            >
                <span className="p-1">
                    Prijava
                </span>
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item
             onClick={() => {navigate(Paths.SIGN_OUT)}}
            >
               <span className="p-1">
                   Odjava
               </span>
            </Dropdown.Item>
        </Dropdown>
    )
}