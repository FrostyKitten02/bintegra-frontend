import {ChangeEvent, FormEvent, useState} from "react";
import InputWithLabel, {errorType} from "../components/InputWithLabel";
import {User} from "../model/interfaces";


export default function RegisterPage() {
    const [user, setUser] = useState<User>({});
    const [passwordMissMatch, setPasswordMissmatch] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const atribute = event.target.name;
        setUser(prevState => ({...prevState, [atribute]: value}));
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user)
        if (user.password !== user.repeatPassword) {
            //TODO show error;
            console.log("Passwords don't match");
            setPasswordMissmatch(true);
            setUser(prevState => ({...prevState, password: "", repeatPassword: ""}));
            return;
        }
        //TODO register the user!!!!
        setUser({});
    }


    return (
        <div className="mb-32 text-gray-800 grid justify-items-center pt-12">
            <h2 className="text-3xl  font-bold text-center mb-12">
                Registracija v samopostrežni portal
            </h2>
            <div className="flex justify-center">
                <div className="group md:w-[500px]">
                    <div className="z-59 hidden md:block md:group-hover:transition md:group-hover:duration-700 duration-700 md:group-hover:scale-[103%] rounded registration-first bg-gray-900 absolute w-[470px] h-[505px]"></div>
                    <div className="z-60 hidden md:block rounded md:group-hover:transition md:group-hover:duration-700 duration-700 md:group-hover:scale-[103%] registration-second bg-green-500 absolute w-[470px] h-[505px] ml-6 mt-6"></div>
                    <div
                        className="z-58 sm:mt-5 sm:ml-5 relative w-full max-w-[350px] sm:max-w-[450px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                        <form className="space-y-6"
                              onSubmit={handleSubmit}>
                            <h5 className="text-xl  font-medium text-gray-900">
                                Registracija
                            </h5>
                            <hr className="pb-6"/>
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
                                placeholder="••••••••"
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
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-[0%] hover:cursor-pointer"
                                               required/>
                                    </div>
                                    <label htmlFor="remember"
                                           className="ml-3 text-sm font-medium text-gray-900">
                                        Strinjam se s
                                        <a className="ml-auto text-sm text-blue-700 hover:underline hover:cursor-pointer">
                                            {" pogoji poslovanja."}
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-green-500 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Registrirajte se
                            </button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}