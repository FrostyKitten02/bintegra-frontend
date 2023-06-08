import {UserCircleIcon} from "@heroicons/react/24/outline";
import {Dropdown} from "flowbite-react";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Paths from "../Paths";
import {IPageContext, PageContext} from "../components/PageContextProvider";

import {UserDto} from "../model/interfaces";

/*<UserCircleIcon className="transition ease-in-out hover:scale-110 duration-300 h-8 w-8 text-gray-500"/> */

export default function UserDropdown() {
    const navigate = useNavigate();
    const context = useContext<IPageContext>(PageContext);
    const [toggle, setToggle] = useState<boolean>(false);
    const initialState: UserDto = {};
    const [user, setUser] = useState<UserDto>(initialState);

    useEffect(() => {
        context.api.UserApi.getCurrentUser()
            .then((response) => {
                setUser(response.data.user ?? initialState)
            })
    }, [])
    return (
        <div className="relative">
            <button
                onClick={() => {
                    setToggle(prevState => !prevState);
                }}
                id="dropdownUserAvatarButton"
                className="flex text-sm rounded-full"
                type="button">
                <UserCircleIcon className="transition text-white h-8 w-8"/>
            </button>
            {toggle ?
                <div id="dropdownAvatar"
                     className="z-10 bg-white right-0 top-[50px] absolute divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownUserAvatarButton">
                        {context.loggedIn ?
                            <>
                                {
                                    user.isConsultant ?
                                        <li>
                                            <Link
                                                to={Paths.USER_PORTAL_BASE_PATH}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Stranke {user.isConsultant}
                                            </Link>
                                        </li> :
                                        <>
                                            <li>
                                                <Link
                                                    to={Paths.USER_PORTAL_BASE_PATH}
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Moj portal
                                                </Link>
                                            </li>
                                            <li className={"block md:hidden"}>
                                                <Link
                                                    to={Paths.USER_PORTAL_PROFILE}
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Profil
                                                </Link>
                                            </li>
                                        </>
                                }
                            </>
                            : null
                        }
                        {!context.loggedIn ?
                            <>
                                <li>
                                    <Link
                                        to={Paths.LOGIN}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Prijava
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Paths.REGISTER}
                                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Registracija
                                    </Link>
                                </li>
                            </> : null
                        }

                    </ul>
                    {context.loggedIn ?
                        <div className="py-2">
                            <Link to={Paths.SIGN_OUT}
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Odjava
                            </Link>
                        </div> : null
                    }
                </div> : null
            }
        </div>
    )
}