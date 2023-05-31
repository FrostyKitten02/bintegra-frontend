import {UserSubscriptionsDataTable} from "./UserSubscriptionsDataTable";

export default function UserPortalDefaultPage() {


    return (
        <div className="py-14 w-full">
            <div className="px-14 pb-16">
                <div className="pb-2 text-right title-a text-2xl uppercase">
                    aktivne naročnine
                </div>
                <hr className="pb-16" />
                <UserSubscriptionsDataTable />
            </div>
            <div className="flex ">
                <div className="flex flex-wrap flex-grow w-full">

                </div>
            </div>
        </div>
    )
}