import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Dropdown} from "flowbite-react";


export default function UserDropdown() {
    return (
        <Dropdown
            label={
                <UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500"/>
            }
            arrowIcon={false}
            inline={true}
        >
            <Dropdown.Header>
                <span className="block text-sm">
                    Bonnie Green
                </span>
                <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                </span>
            </Dropdown.Header>
            <Dropdown.Item>
                Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
                Settings
            </Dropdown.Item>
            <Dropdown.Item>
                Earnings
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>
                Sign out
            </Dropdown.Item>
        </Dropdown>)
}