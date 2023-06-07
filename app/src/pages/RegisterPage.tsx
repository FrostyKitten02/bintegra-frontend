import {ChangeEvent, FormEvent, useContext, useState} from "react";
import InputWithLabel, {errorType} from "../components/InputWithLabel";
import register_img from "../pictures/register_img.jpg";
import {RegisterRequestDto} from "../model/RequestDtos";
import {IPageContext, PageContext} from "../components/PageContextProvider";

export default function RegisterPage() {
    const context = useContext<IPageContext>(PageContext);

    const [user, setUser] = useState<RegisterRequestDto>({});
    const [passwordMissMatch, setPasswordMissmatch] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const atribute = event.target.name;
        setUser(prevState => ({...prevState, [atribute]: value}));
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (user.password !== user.repeatPassword) {
            //TODO show error;
            setPasswordMissmatch(true);
            setUser(prevState => ({...prevState, password: "", repeatPassword: ""}));
            return;
        }

        context.api.UserApi.register(user).then(response => {
            //TODO test registration!! will missing data bee a problem??
            setUser({});
        });

    }


    return (
        <div className="mb-32 grid grid-cols-6 pt-12">
            <div className="flex self-center justify-center lg:justify-end pr-5 col-span-6 lg:col-span-3">
                <img
                    className=" w-[60%] md:w-[40%] lg:w-[60%]"
                    alt=""
                    src={register_img}
                />
            </div>
            <div className="flex m-8 md:m-0 justify-center lg:justify-start group col-span-6 lg:col-span-3">
                {/*
                    <div className="z-59 hidden md:block md:group-hover:transition md:group-hover:duration-700 duration-700 md:group-hover:scale-[103%] rounded registration-first bg-gray-900 absolute w-[470px] h-[505px]"></div>
                    <div className="z-60 hidden md:block rounded md:group-hover:transition md:group-hover:duration-700 duration-700 md:group-hover:scale-[103%] registration-second bg-sage-green absolute w-[470px] h-[505px] ml-6 mt-6"></div>
                    */}
                <div
                    className="z-58 sm:mt-5 sm:ml-5 relative w-full max-w-[350px] sm:max-w-[450px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                    <form className="space-y-6"
                          onSubmit={handleSubmit}>
                        <h5 className="title-a text-2xl uppercase text-gray-900">
                            Registracija
                        </h5>
                        <hr className="pb-6"/>

                        <InputWithLabel
                            handleChange={handleChange}
                            value={user.firstName ?? ""}
                            label="Ime"
                            name="firstName"
                            type="text"
                            required
                        />

                        <InputWithLabel
                            handleChange={handleChange}
                            value={user.lastName ?? ""}
                            label="Priimek"
                            name="lastName"
                            type="text"
                            required
                        />

                        <InputWithLabel
                            handleChange={handleChange}
                            value={user.email ?? ""}
                            label="E-mail"
                            name="email"
                            type="email"
                            required
                        />

                        <InputWithLabel
                            handleChange={handleChange}
                            value={user.password ?? ""}
                            label="Geslo"
                            name="password"
                            type="password"
                            event={passwordMissMatch ? errorType : undefined}
                            message={"Gesli se ne ujemata!"}
                            required
                        />

                        <InputWithLabel
                            handleChange={handleChange}
                            value={user.repeatPassword ?? ""}
                            label="Ponovno geslo"
                            name="repeatPassword"
                            type="password"
                            event={passwordMissMatch ? errorType : undefined}
                            message={"Gesli se ne ujemata!"}
                            required
                        />

                        <div className="flex items-start pt-10">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember"
                                           type="checkbox"
                                           value=""
                                           className="w-4 h-4 border checked:bg-sage-green border-gray-300 rounded bg-gray-50 focus:ring-[0%] hover:cursor-pointer"
                                           required/>
                                </div>
                                <label htmlFor="remember"
                                       className="ml-3 text-sm font-medium text-gray-900">
                                    Strinjam se s
                                    <a className="ml-auto text-sm text-sage-green hover:underline hover:cursor-pointer">
                                        {" pogoji poslovanja."}
                                    </a>
                                </label>
                            </div>
                        </div>
                        <button type="submit"
                                className="w-full text-white bg-sage-green hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Registrirajte se
                        </button>

                    </form>
                </div>
            </div>

        </div>
    )
}