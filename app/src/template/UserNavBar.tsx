import Paths from "../Paths";
import {useNavigate} from "react-router-dom";
import UserDropdown from "./UserDropdown";


export default function UserNavBar() {
    const navigate = useNavigate();
    return (
        <nav className="flex px-10 items-center justify-between flex-wrap bg-white py-2 lg:px-36">
            <div className="flex items-center flex-grow bg-white text-black">
                <a
                    className="transition ease-in-out hover:scale-105 duration-200 font-semibold text-xl tracking-tight hover:cursor-pointer"
                    onClick={()=>{navigate(Paths.HOME)}}
                >Samopostrežni portal</a>
            </div>
            <div className="block hidden sm:block flex-shrink-0 justify-center lg:flex lg:items-center">
                <div className="flex text-sm">
                    <UserDropdown />
                </div>
            </div>
            <div className="block sm:hidden w-full pt-2">
                <div className="">
                    dropdown za telefon pozicioniran desno kot na
                </div>
            </div>
        </nav>

    )
}