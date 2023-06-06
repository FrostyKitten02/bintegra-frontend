import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useRef, useState} from "react";
import {Client} from "../model/api/Client";
import {UserDto} from "../model/interfaces";

const SESSION_TOKEN_STORAGE: string = "SESSION";
const SESSION_USER_STORAGE: string = "USER";


export interface IPageContext {
    login: (username: string, password: string) => Promise<boolean>,
    logOut: () => void,
    api: Client,
    loggedIn: boolean,
    userCache?: UserDto,
    setCtx?: Dispatch<SetStateAction<IPageContext>>
}


function initContext(): IPageContext {
    return {
        login: async function(username, password) {
            const res = await this.api.UserApi.login(username, password);
            if (res.data.success) {
                const token = btoa(username + ":" + password)
                saveUserAuthToSessionStorage(token);
                if (this.setCtx !== undefined) {
                    this.setCtx(prevState => {return {...prevState, api: new Client(token), loggedIn: true, userCache: res.data.user}})
                } else {
                    this.api = new Client(token);
                    this.userCache = res.data.user;
                    this.loggedIn = true;
                }
                return true;
            }

            return false;
        },
        logOut: function() {
            removeAuthFromSessionStorage();
            if (this.setCtx === undefined) {
                this.userCache = undefined;
                this.loggedIn = false;
                this.api = new Client();
                return;
            }
            this.setCtx(prevState => ({...prevState, api: new Client(), loggedIn: false, userCache: undefined}))
        },
        loggedIn: initLoggedIn(),
        api: initClient(),
    }
}

function initLoggedIn() {
    const token = sessionStorage.getItem(SESSION_TOKEN_STORAGE);
    if (token !== undefined && token !== null && token !== "") {
        return true;
    }
    return false;
}

function initClient() {
    const token = sessionStorage.getItem(SESSION_TOKEN_STORAGE);
    if (token !== undefined && token !== null && token !== "") {
        return new Client(token);
    }
    return new Client();
}

export const PageContext = createContext<IPageContext>(initContext());


function saveUserAuthToSessionStorage(token: string) {
    removeAuthFromSessionStorage();
    sessionStorage.setItem(SESSION_TOKEN_STORAGE, token);
}

function removeAuthFromSessionStorage() {
    sessionStorage.removeItem(SESSION_TOKEN_STORAGE);
}

//Storing user doen't work don't know why!!!
function storeUserInSession(userDto?: UserDto) {
    removeUserFromSession();
    if (userDto === undefined) {
        return;
    }
    sessionStorage.setItem(SESSION_USER_STORAGE, "WTF");
}

function removeUserFromSession() {
    sessionStorage.removeItem(SESSION_USER_STORAGE);
}
function getUserFromSession(): UserDto | undefined {
    const userStr = sessionStorage.getItem(SESSION_USER_STORAGE);
    if (userStr === undefined || userStr === null || userStr === "") {
        return undefined;
    }

    try {
        const userDto: UserDto | null= JSON.parse(userStr);
        if (userDto === null || userDto === undefined) {
            return undefined;
        } else {
            return userDto;
        }
    } catch (error) {
        //TODO: log error
    }

    return undefined;
}
//___________________________________________________________

export default function PageContextProvider({children}:{children: ReactNode}) {
    const [ctx, setCtx] = useState<IPageContext>(initContext());

    if (ctx.setCtx === undefined) {
        ctx.setCtx = setCtx;
    }

    useEffect(() => {
        if (ctx.loggedIn) {
            if (ctx.userCache == undefined) {
                ctx.api.UserApi.getCurrentUser().then(res => {
                    setCtx(prevState => ({...prevState, userCache: res.data.user}));
                });
            }
            return;
        }

        const token = sessionStorage.getItem(SESSION_TOKEN_STORAGE);
        if (token) {
            setCtx(prevState => ({...prevState, loggedIn: true, api: new Client(token)}));
        }
    }, [ctx])

    return (
        <PageContext.Provider value={ctx}>
            {children}
        </PageContext.Provider>
    )
}