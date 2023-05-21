import {useNavigate} from "react-router-dom";
import Paths from "../Paths";

const NavItem = ({name, path}:{name: string, path: string}) => {
  const navigate = useNavigate();

  return (
      <a className="hover:bg-white py-4 px-4 transition ease-in-out hover:scale-110 duration-200 block lg:inline-block text-xl text-white hover:text-gray-900 hover:cursor-pointer"
           aria-current="page"
           onClick={()=>{navigate(path)}}
        >
            {name}
      </a>
  )
}

export default function NavigationBar() {
    const navigate = useNavigate();
    return(
        <nav className="flex items-center sticky top-0 justify-center flex-wrap bg-gray-900">
            <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <NavItem name={"Mobilina telefonija"} path={Paths.MOBILE_PLANS}/>
                    <NavItem name={"Mobilni internet"} path={Paths.MOBILE_INTERNET_PLANS}/>
                    <NavItem name={"Internet"} path={Paths.INTERNET_PLANS} />
                    <NavItem name={"Televizija"} path={Paths.TV_PLANS} />
                </div>
            </div>
        </nav>
    )
}