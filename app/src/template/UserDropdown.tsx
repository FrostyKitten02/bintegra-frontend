import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Menu, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {Dropdown} from "flowbite-react";

/*<UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500"/> */

export default function UserDropdown() {
    return (
        <Dropdown color={"white"}
                  className={"z-50"}
                  arrowIcon={false}
                  trigger={"hover"}
                  label={
                      <>
                          <UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500"/>
                          <span className={"text-gray-500 px-2"}>
                              Račun
                          </span>
                      </>
                  }>
            <Dropdown.Header>
                <span className="block text-sm">
                    Bonnie Green
                </span>
                <span className="block truncate text-sm font-medium">
                    bonnie@flowbite.com
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
        </Dropdown>
    )
}