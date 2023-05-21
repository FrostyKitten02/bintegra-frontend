import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Avatar, Dropdown} from "flowbite-react";


  /*  <UserCircleIcon className="h-6 w-6 text-gray-500"/>

   */


export default function UserNavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white px-4 py-4">
            <div className="flex items-center pb-6 flex-grow bg-white text-black">
            </div>
            <div className="block flex-shrink-0 lg:flex lg:items-center sm:flex sm:items-center">
                <div className="text-sm lg:flex-grow">
                    <Dropdown
                        label={<UserCircleIcon className="h-9 w-9 text-gray-500"/>}
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
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </div>

            </div>
        </nav>

    )
}