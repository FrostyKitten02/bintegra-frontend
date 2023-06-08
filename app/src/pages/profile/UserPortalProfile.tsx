import {PencilIcon, XMarkIcon} from "@heroicons/react/24/outline";
import InputWithLabel from "../../components/InputWithLabel";
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {User, UserDto} from "../../model/interfaces";
import FormHandler from "../../Util/FormHandler";
import {IPageContext, PageContext} from "../../components/PageContextProvider";
import {useLoaderData} from "react-router-dom";
import {UserResponseDto} from "../../model/ResponseDtos";

export default function UserPortalProfile() {
    const context = useContext<IPageContext>(PageContext);
    const loader: UserResponseDto | undefined = useLoaderData() as UserResponseDto | undefined;
    const initialState: UserResponseDto = {
        user: {
            email: "",
            firstname: "",
            lastname: ""
        }
    }
    const [editing, setEditing] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<UserResponseDto>(initialState);
    const [user, setUser] = useState<User>({});


    useEffect(() => {
        context.api.UserApi.getCurrentUser()
            .then((response) => {
                //console.log(response.data)
                setCurrentUser(response.data)
            });
        setUser(loader?.user??{})
    }, [loader]);

    const handleStartEditiButtonClick = () => {
        context.api.UserApi.getCurrentUser()
            .then((response) => {
                //console.log(response.data)
                setCurrentUser(response.data)
            });
        setEditing(prevState => !prevState);
    }

    const handleSaveButtonClick = () => {
        //TODO: send data to backend, display error or success message
        setEditing(false);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => FormHandler.handleInputChange(event, prevState));
    }

    return (
        <div>
            <div className="grid grid-cols-6">
                <div className="flex justify-center self-center col-span-6 lg:col-span-3">
                    <div className="space-y-6 w-[400px] py-10 px-6">
                        <div className="flex justify-center items-center gap-x-4">
                            <h1>Vaši podatki</h1>
                            <button
                                className="transition duration-700 hover:scale-110"
                                onClick={handleStartEditiButtonClick}>
                                {editing ? <XMarkIcon className="h-6 w-6 text-black"/> :
                                    <PencilIcon className="h-6 w-6 text-black"/>}
                            </button>
                        </div>
                        <InputWithLabel handleChange={handleInputChange} value={user.firstname} label={`${currentUser.user?.firstname}`}
                                        name="firstname" type="text" placeholder={""} disabled={!editing}/>
                        <InputWithLabel handleChange={handleInputChange} value={user.lastname} label= {`${currentUser.user?.lastname}`}
                                        name="lastname" type="text" placeholder={""} disabled={!editing}/>
                        <InputWithLabel handleChange={handleInputChange} value={user.email} label={`${currentUser.user?.email}`}
                                        name="email"
                                        type="email" placeholder={""} disabled={!editing}/>
                        <button className="button-default w-full" onClick={handleSaveButtonClick}
                                disabled={!editing}>Potrdi
                        </button>
                    </div>
                </div>
                <div className="flex justify-center lg:col-span-3 col-span-6">
                    <img
                        className="h-[70%] self-center"
                        alt=""
                        src="https://img.freepik.com/free-vector/app-data-concept-illustration_114360-4269.jpg?w=826&t=st=1685524614~exp=1685525214~hmac=c384488e9bca855ebc44cb44d6d0a8ce768113035c4fe1e1982226c6c494ae73"
                    />
                </div>

            </div>
        </div>
    )
}