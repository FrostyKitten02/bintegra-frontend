import Paths from "../Paths";
import {useNavigate} from "react-router-dom";
import UserDropdown from "./UserDropdown";
import MobileUserDropdown from "./MobileUserDropdown";


export default function UserNavBar() {
    const navigate = useNavigate();
    return (
        <div className="relative bg-gray-900 px-5">
            <div className="relative z-50 w-full h-full">
                <nav className="flex items-center justify-between flex-wrap bg-transparent">
                    <div className="flex items-center flex-grow bg-transparent text-white">
                        <a
                            className="transition ease-in-out hover:scale-105 duration-200 title-a font-semibold text-xl tracking-tight hover:cursor-pointer"
                            onClick={() => {navigate(Paths.HOME)}
                            }>
                            Samopostrežni portal
                        </a>
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