import {ReactNode, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import Paths from "../Paths";
import {IPageContext, PageContext} from "./PageContextProvider";

function NavItem(
    {
        notification,
        message,
        name,
        path,
        icon
    }: {
        notification?: string | number,
        message?: string,
        name: string,
        path: string,
        icon: ReactNode
    }) {
    const navigate = useNavigate();

    return (
        <li className="hover:cursor-pointe">
            <a
               onClick={() => navigate(path)}
               className="flex items-center p-2 text-gray-900 rounded-lg duration-500 hover:bg-gray-200">
                {icon}
                <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
                {notification ? <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">{notification}</span> : null}
                {message ? <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">Pro</span> : null}
            </a>
        </li>
    )
}


const dashboardSvg = (
       <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
       </svg>
);

export default function UserPortalSideNavigation() {
    const context = useContext<IPageContext>(PageContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-full bg-gray-50">
            <button
                aria-controls="default-sidebar" type="button"
                onClick={() => setIsOpen(prevState => !prevState)}
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside className={`w-64 h-full transition-transform ${isOpen ? '-translate-x-full' : ''} lg:translate-x-0`}
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {context.userCache == undefined?null:
                            (context.userCache?
                                <NavItem name="Stranke" path={Paths.USER_PORTAL_CONSULTANT_CUSTOMERS} icon={dashboardSvg} />
                            : (
                                <>
                                    <NavItem name="Pregled" path={Paths.USER_PORTAL_BASE_PATH} icon={dashboardSvg}/>
                                    <NavItem name="Profil" path={Paths.USER_PORTAL_PROFILE} icon={dashboardSvg}/>
                                    <hr />
                                    <NavItem name="Moje mobilne storitve" path={Paths.USER_PORTAL_MOBILE} icon={dashboardSvg}/>
                                    <NavItem name="Moj internet" path={Paths.USER_PORTAL_INTERNET} icon={dashboardSvg}/>
                                    <NavItem name="Moja televizija" path={Paths.USER_PORTAL_TV} icon={dashboardSvg}/>
                                </>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </div>
    )
}