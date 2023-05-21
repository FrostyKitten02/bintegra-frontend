
import Paths from "../Paths";
import {useNavigate} from "react-router-dom";
import UserDropdown from "./UserDropdown";


export default function UserNavBar() {
    const navigate = useNavigate();
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-2 px-10">
            <div className="flex items-center flex-grow bg-white text-black">
                <a
                    className="transition ease-in-out hover:scale-105 duration-200 font-semibold text-xl tracking-tight hover:cursor-pointer"
                    onClick={()=>{navigate(Paths.HOME)}}
                >Samopostrežni portal</a>
            </div>
            <div className="block flex-shrink-0 justify-center sm:flex sm:items-center">
                <div className="flex text-sm">
                    <UserDropdown />
                </div>
            </div>
        </nav>

    )
}