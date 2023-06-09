import {UserCircleIcon} from "@heroicons/react/24/outline";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Paths from "../Paths";
import {IPageContext, PageContext} from "../components/PageContextProvider";
import {UserDto} from "../model/interfaces";

const UserDropdownItem = ({ name, path }: { name:string, path:string }) => {
    const navigation = useNavigate();
    return(
        <li className = "text-right py-2 border-t border-t-gray-300">
            <Link
                onClick={() => window.scroll(0, 0)}
                className="text-white"
                to={path}
            >
                {name}
            </Link>
        </li>
    )
}

export default function MobileUserDropdown() {
    const [dropdownState, setDropdownState] = useState<boolean>(false);
    const context = useContext<IPageContext>(PageContext);
    const initialState: UserDto = {};
    const [user, setUser] = useState<UserDto>(initialState);

    useEffect(() => {
        context.api.UserApi.getCurrentUser()
            .then((response) => {
                setUser(response.data.user ?? initialState)
            })
    }, [])
    return (
        <div>
            <div className="flex justify-between pb-2">

                    <Link
                        onClick={() => window.scroll(0, 0)}
                        className="title-a self-center text-white text-xl"
                        to={Paths.HOME}
                    >
                        Samopostrežni portal
                    </Link>

                <button onClick={() => setDropdownState(prevState => !prevState)} className="flex">
                    <UserCircleIcon className="h-10 w-10 text-white"/>
                </button>
            </div>
            <div className={`${!dropdownState ? "hidden" : "block"}`}>
                <div>
                    <ul>
                        { context.loggedIn ?
                            <>
                                {
                                    user.isConsultant ?
                                        <UserDropdownItem name="Stranke"  path={Paths.USER_PORTAL_CONSULTANT_CUSTOMERS} />
                                        :
                                        <>
                                            <UserDropdownItem name="Moj portal" path={Paths.USER_PORTAL_BASE_PATH} />
                                            <UserDropdownItem name="Profil" path={Paths.USER_PORTAL_PROFILE} />
                                        </>
                                }
                                <UserDropdownItem name={"Izpis"} path={Paths.SIGN_OUT} />
                            </> :
                            <>
                                <UserDropdownItem name="Registracija" path={Paths.REGISTER} />
                                <UserDropdownItem name="Prijava" path={Paths.LOGIN} />
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}