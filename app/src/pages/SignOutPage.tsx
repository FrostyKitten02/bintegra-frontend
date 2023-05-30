
import {Link} from "react-router-dom";
import Paths from "../Paths";

export default function SignOutPage(){
    const handleChange = () => {
        // Perform the desired logic here
        // Redirect to the home page using Link component
        return <Link to={Paths.HOME} />;
    };
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="  max-w-[350px] sm:max-w-[350px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 text-center">
                <h5 className="title-a text-2xl uppercase text-gray-900">
                    Sign out
                </h5>
                <form>
                    <div className="flex items-start pt-10">
                        <div className="flex items-start flex-col">
                            <div>
                                <p>Are you sure you want to sign out?</p>
                                <div className="mt-6 flex justify-between">
                                    <Link
                                        to={Paths.HOME}
                                        className="w-full text-white bg-sage-green hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4"
                                        onClick={handleChange}
                                    >
                                        Yes
                                    </Link>
                                    <Link
                                        to={Paths.USER_PROFILE}
                                        className="w-full text-white bg-sage-green hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        No
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}