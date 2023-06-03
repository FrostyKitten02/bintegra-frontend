import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {Client} from "../model/api/Client";

const SESSION_TOKEN_STORAGE: string = "SESSION";


export interface IPageContext {
    login: (username: string, password: string) => Promise<boolean>,
    logOut: () => void,
    api: Client,
    loggedIn: boolean,
    setCtx?: Dispatch<SetStateAction<IPageContext>>
}


function initContext(): IPageContext {
    return {
        login: async function(username, password) {
            const res = await this.api.UserApi.login(username, password)
            console.log(res.data)
            if (res.data.success) {
                const token = btoa(username + ":" + password)
                saveUserAuthToSessionStorage(token);
                if (this.setCtx !== undefined) {
                    this.setCtx(prevState => {return {...prevState, api: new Client(token), loggedIn: true}})
                } else {
                    this.api = new Client(token);
                    this.loggedIn = true;
                }
                console.log("success")
                return true;
            }

            return false;
        },
        logOut: function() {
            removeAuthFromSessionStorage();
            if (this.setCtx === undefined) {
                this.api = new Client();
                this.loggedIn = false;
                return;
            }
            this.setCtx(prevState => ({...prevState, api: new Client(), loggedIn: false}))
        },
        loggedIn: false,
        api: new Client(),
    }
}


export const PageContext = createContext<IPageContext>(initContext());


function saveUserAuthToSessionStorage(token: string) {
    removeAuthFromSessionStorage();
    sessionStorage.setItem(SESSION_TOKEN_STORAGE, token);
}

function removeAuthFromSessionStorage() {
    sessionStorage.removeItem(SESSION_TOKEN_STORAGE);
}

export default function PageContextProvider({children}:{children: ReactNode}) {
    const [ctx, setCtx] = useState<IPageContext>(initContext());

    if (ctx.setCtx === undefined) {
        ctx.setCtx = setCtx;
    }


    useEffect(() => {
        if (ctx.loggedIn) {
            return;
        }

        const token = sessionStorage.getItem(SESSION_TOKEN_STORAGE);
        if (token) {
            setCtx(prevState => ({...prevState, loggedIn: true, api: new Client(token)}));
            console.log("token in storage!!")
        }
    }, [ctx])



    return (
        <PageContext.Provider value={ctx}>
            {children}
        </PageContext.Provider>
    )
}