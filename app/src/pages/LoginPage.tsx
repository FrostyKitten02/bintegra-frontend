import {ChangeEvent, FormEvent, useState} from "react";
import InputWithLabel from "../components/InputWithLabel";


export interface User {
    email?: string;
    password?: string;
    repeatPassword?: string;
    terms?: boolean;
}


export default function LoginPage() {
    const [user, setUser] = useState<User>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        const atribute = event.target.name;
        setUser(prevState => ({...prevState, [atribute]: value}));
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        //TODO login the user!!!!
        setUser({});
    }

    return(
        <div className="mb-32 text-gray-800 grid justify-items-center pt-12">
            <h2 className="text-3xl font-bold text-center mb-12">Prijava v samopostrežni portal</h2>
            <div className="w-full max-w-[350px] sm:max-w-[450px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900">Prijava</h5>

                    <InputWithLabel
                        handleChange={handleChange}
                        value={user.email??""}
                        label="E-mail"
                        name="email"
                        type="email"
                        placeholder="E-mail naslov"
                        required
                    />

                    <InputWithLabel
                        handleChange={handleChange}
                        value={user.password??""}
                        label="Geslo"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                    />

                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 hover:cursor-pointer"
                                       required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Zapomni si me</label>
                        </div>
                        <a className="ml-auto text-sm text-blue-700 hover:underline hover:cursor-pointer">Pozabljeno geslo?</a>
                    </div>
                    <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Prijavi se
                    </button>
                    <div className="text-sm font-medium text-gray-500">Še nimate računa? <a className="text-blue-700 hover:underline hover:cursor-pointer">ustvari račun</a>
                    </div>
                </form>
            </div>
        </div>
    )
}