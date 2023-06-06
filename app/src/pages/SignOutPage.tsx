import {Link} from "react-router-dom";
import Paths from "../Paths";
import signout_img from "../pictures/signout_img.jpg";
import {IPageContext, PageContext} from "../components/PageContextProvider";
import {useContext} from "react";

export default function SignOutPage(){
    const context = useContext<IPageContext>(PageContext);
    const handleChange = () => {
        // Perform the desired logic here
        // Redirect to the home page using Link component

    };
    return(
        <div className="flex justify-center items-center min-h-screen mx-6">
            <div className="max-w-md w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center">
                <h5 className="title-a text-2xl uppercase text-gray-900">Izpis</h5>
                <div className="flex flex-col items-center mt-8">
                    <img
                        src={signout_img}
                         alt="Logout"
                        className="w-[60%] mb-4"
                    />
                    <p>Ali ste prepričani, da se želite izpisati?</p>
                    <div className="mt-10 flex justify-between">
                        <Link
                            onClick={()=>context.logOut()}
                            to={Paths.HOME.length === 0 ? "/" : Paths.HOME}
                            className="w-[100px] text-gray-900 font-medium text-sm text-center mr-4"
                        >
                            Izpiši me
                        </Link>
                        <Link
                            to={Paths.HOME.length === 0 ? "/" : Paths.HOME}
                            className="w-[100px] text-gray-900 font-medium text-sm text-center"
                        >
                            Nazaj
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}