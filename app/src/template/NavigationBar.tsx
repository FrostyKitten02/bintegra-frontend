import {useNavigate} from "react-router-dom";
import Paths from "../Paths";
import {Bars3Icon} from "@heroicons/react/20/solid";
import {useState} from "react";


const NavItem = ({name, path}: { name: string, path: string}) => {
    const navigate = useNavigate();

    return (
        <a className=" py-3 px-4 mx-2 border-b-2 border-white hover:border-b-2 hover:border-gray-900 transition ease-in-out hover:scale-110 duration-500 block lg:inline-block text-xl hover:text-gray-900 hover:cursor-pointer"
           aria-current="page"
           onClick={() => {
               navigate(path)
           }}
        >
            {name}
        </a>
    )
}

export default function NavigationBar() {
    const [toggleMenuState, setToggleMenuState] = useState<boolean>(false);

    return (
        <nav className="flex items-center sticky top-0 justify-center flex-wrap bg-gray-50 z-40">
            <button onClick={()=>{setToggleMenuState(prev=>!prev)}} className="text-gray-900 block lg:hidden w-full">
                <Bars3Icon className="text-white h-10 ml-10 my-2"/>
            </button>

            <div className={`${!toggleMenuState?"hidden":"block"} w-full lg:flex lg:items-center m-0 sm:mx-12 lg:w-auto`} >
                <div className="text-sm lg:flex-grow sm:w-full text-center sm:text-left">
                    <NavItem name={"Mobilina telefonija"} path={Paths.MOBILE_PLANS}/>
                    <NavItem name={"Mobilni internet"} path={Paths.MOBILE_INTERNET_PLANS}/>
                    <NavItem name={"Internet"} path={Paths.INTERNET_PLANS}/>
                    <NavItem name={"Televizija"} path={Paths.TV_PLANS}/>
                </div>
            </div>
            <hr />
        </nav>
    )
}