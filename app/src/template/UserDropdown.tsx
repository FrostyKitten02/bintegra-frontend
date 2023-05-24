import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Dropdown} from "flowbite-react";
import React from "react";
import {Link} from "react-router-dom";
import Paths from "../Paths";

/*<UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500"/> */

export default function UserDropdown() {
    return (
        <Dropdown color="white" className="z-50" arrowIcon={false} trigger="hover" label={
            <>
                <UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500" />
                <span className="text-gray-500 px-2">Račun</span>
            </>
        }>
            <Dropdown.Header>
                <span className="block text-sm">user</span>
                <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>
                <Link to={Paths.USER_PROFILE}>User Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={Paths.REGISTER}>Register</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={Paths.LOGIN}>Login</Link>
            </Dropdown.Item>
            {/*<Dropdown.Item>
                <Link to={Paths.EARNINGS}>Earnings</Link>
            </Dropdown.Item>*/}
            <Dropdown.Divider />

        </Dropdown>
    )
}