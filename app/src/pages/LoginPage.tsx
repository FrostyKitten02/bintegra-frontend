import {ChangeEvent, FormEvent, useContext, useState} from "react";
import InputWithLabel from "../components/InputWithLabel";
import {Link, useNavigate} from "react-router-dom";
import Paths from "../Paths";
import login_img from "../pictures/login_img.jpg";
import {User} from "../model/interfaces";
import FormHandler from "../Util/FormHandler";
import {IPageContext, PageContext} from "../components/PageContextProvider";


export default function LoginPage() {
    const navigate = useNavigate();
    const context = useContext<IPageContext>(PageContext);
    const [user, setUser] = useState<User>({});
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => (FormHandler.handleInputChange(event, prevState)));
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        context.login(user.email ?? "", user.password ?? "");

        //TODO login the user!!!!
        setUser({});
    }


    return (
        <div className="mb-32 grid grid-cols-6 pt-12">
            <div className="flex self-center justify-center lg:justify-end pr-5 col-span-6 lg:col-span-3">
                <img
                    className=" w-[60%] md:w-[40%] lg:w-[60%]"
                    alt=""
                    src={login_img}
                />
            </div>
            <div className="flex m-8 md:m-0 justify-center lg:justify-start group col-span-6 lg:col-span-3">
                <div
                    className="z-58 sm:mt-5 sm:ml-5 relative w-full max-w-[350px] sm:max-w-[450px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                    <form className="space-y-6"
                          onSubmit={handleSubmit}>
                        <h5 className="title-a text-2xl uppercase text-gray-900">
                            Prijava
                        </h5>
                        <hr className="pb-5"/>
                        <InputWithLabel
                            handleChange={handleChange}
                            value={user.email ?? ""}
                            label="E-mail"
                            name="email"
                            type="email"
                            placeholder="E-mail naslov"
                            required
                        />

                        <InputWithLabel
                            handleChange={handleChange}
                            value={user.password ?? ""}
                            label="Geslo"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />

                        <div className="flex items-start pt-16">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember"
                                           type="checkbox"
                                           value=""
                                           className="w-4 h-4 checked:bg-sage-green border border-gray-300 rounded bg-gray-50 focus:ring-[0%] hover:cursor-pointer"
                                           required/>
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="ml-3 text-sm font-medium text-gray-900">
                                    Zapomni si me
                                </label>
                            </div>
                            <a className="ml-auto text-sm text-sage-green hover:underline hover:cursor-pointer">
                                Pozabljeno geslo?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-sage-green hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Potrdi prijavo
                        </button>
                        <div className="text-sm font-medium text-gray-500">
                            Še nimate računa?
                            <Link
                                className="text-sage-green hover:underline hover:cursor-pointer pl-2"
                                onClick={() => {
                                    window.scroll(0, 0)
                                }}
                                to={Paths.REGISTER}>
                                Ustvari račun.
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}