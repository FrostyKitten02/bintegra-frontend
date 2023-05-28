import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Dropdown} from "flowbite-react";
import React from "react";
import {Link} from "react-router-dom";
import Paths from "../Paths";

/*<UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500"/> */

export default function UserDropdown() {
    return (
        <Dropdown
            color="white"
            className="w-[250px]"
            arrowIcon={false}
            trigger="hover"
            label={
                <>
                    <UserCircleIcon
                        className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-white"/>
                    <span
                        className="text-white px-2">
                        Račun
                    </span>
                </>
            }>
            <Dropdown.Header>
                <span className="block p-1 text-sm">Uporabnisko ime</span>
            </Dropdown.Header>
            <Dropdown.Item>
                <Link className="w-full p-1 h-full" to={Paths.USER_PROFILE_BASE_PATH}>User Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link
                    className="w-full p-1 h-full"
                    to={Paths.REGISTER}>
                    Register
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link className="w-full p-1 h-full" to={Paths.LOGIN}>Login</Link>
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>
                <Link className="w-full p-1 h-full" to={Paths.HOME}>Sign out</Link>
            </Dropdown.Item>
        </Dropdown>
    )
}