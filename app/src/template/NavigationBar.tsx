import {useNavigate} from "react-router-dom";
import Paths from "../Paths";

const NavItem = ({name, path}:{name: string, path: string}) => {
  const navigate = useNavigate();

  return (
      <a className="block mt-4 lg:inline-block text-xl lg:mt-0 text-white hover:text-gray-400 hover:text-white mr-4 hover:cursor-pointer"
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
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6 hover:cursor-pointer">
                <a
                    className="font-semibold text-xl tracking-tight hover:text-gray-400"
                    onClick={()=>{navigate(Paths.HOME)}}
                >Samopostrežni portal</a>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <NavItem name="Mobilini paketi" path={Paths.MOBILE_PLANS}/>
                </div>
            </div>
        </nav>
    )
}