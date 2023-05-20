import {useNavigate} from "react-router-dom";

const NavItem = ({name, path}:{name: string, path: string}) => {
  const navigate = useNavigate();

  return (
      <li>
        <a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-gray-500 hover:cursor-pointer"
           aria-current="page"
           onClick={()=>{navigate(path)}}
        >
            {name}
        </a>
      </li>
  )
}

export default function NavigationBar() {

    return(
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavItem name="Domov" path="/" />
                <NavItem name="Narocnine" path="/narocnine" />
                <NavItem name="O nas" path="/about" />
              </ul>
            </div>
          </div>
        </nav>
    )
}