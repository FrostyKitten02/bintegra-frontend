import {UserSubscriptionsDataTable} from "./UserSubscriptionsDataTable";
import {UserSubscriptionShowcard} from "./UserSubscriptionShowcard";
import {useContext, useEffect, useState} from "react";
import {IPageContext, PageContext} from "../../components/PageContextProvider";
import {UserDto} from "../../model/interfaces";
import UserPortalConsultantCustomersPage from "./UserPortalConsultantCustomersPage";


export default function UserPortalDefaultPage() {
    const context = useContext<IPageContext>(PageContext);
    const [user, setUser] = useState<UserDto | undefined>(undefined);

    useEffect(() => {
        context.api.UserApi.getCurrentUser()
            .then((response) => {
                setUser(response.data.user??{})
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])





    return (
        <div className="py-14 w-full">
            <div className="px-4 sm:px-14 pb-16">
                {user == undefined?null:
                    (user.isConsultant?
                            <>
                                <UserPortalConsultantCustomersPage />
                            </>
                        :<>
                            <div className="pb-2 text-right title-a text-2xl uppercase">
                                aktivne naročnine
                            </div>
                            <hr className="pb-4 md:pb-16" />
                            <UserSubscriptionsDataTable />
                            <UserSubscriptionShowcard />
                        </>)}

            </div>
            <div className="grid grid-cols-8 px-20">
                <div className="col-span-6 md:col-span-3">
                    {/*} <UserPortalPieChart naslov={"Cenovni mesečni pregled naročnin"} /> */}
                </div>
                <div className="col-span-6 md:col-span-5">
                </div>
            </div>
        </div>
    )
}