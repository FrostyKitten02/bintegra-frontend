
import {Link} from "react-router-dom";
import Paths from "../Paths";

export default function SignOutPage(){
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
                        src="https://img.freepik.com/free-vector/escape-concept-illustration_114360-5496.jpg?size=626&ext=jpg&ga=GA1.1.1252298357.1685210611"
                         alt="Logout"
                        className="w-40 h-40 mb-4"
                    />
                    <p>Ali ste prepričani, da se želite izpisati?</p>
                    <div className="mt-10 flex justify-between">
                        <Link
                            to={Paths.HOME}
                            className="w-[100px] text-gray-900 font-medium text-sm text-center mr-4"
                            onClick={handleChange}
                        >
                            Izpiši me
                        </Link>
                        <Link
                            to={Paths.USER_PROFILE}
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