import Paths from "../Paths";
import {Link, useNavigate} from "react-router-dom";
import UserDropdown from "./UserDropdown";
import MobileUserDropdown from "./MobileUserDropdown";


export default function UserNavBar() {
    return (
        <div className="relative bg-gray-900 px-5">
            <div className="relative z-50 w-full h-full">
                <nav className="flex items-center flex-row justify-between flex-wrap bg-transparent">
                    <div className="hidden sm:block flex-grow bg-transparent text-white">
                        <Link
                            className="transition ease-in-out hover:scale-105 duration-200 title-a font-semibold text-xl tracking-tight hover:cursor-pointer"
                            to={Paths.HOME}
                            >
                            Samopostrežni portal
                        </Link>
                    </div>
                    <div className="block hidden sm:block flex-shrink-0 justify-center lg:flex lg:items-center">
                        <div className="flex text-sm">
                            <UserDropdown />
                        </div>
                    </div>
                    <div className="block sm:hidden w-full pt-2">
                        <div className="">
                            <MobileUserDropdown />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}