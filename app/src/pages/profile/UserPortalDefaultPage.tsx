import {UserSubscriptionsDataTable} from "./UserSubscriptionsDataTable";
import {UserPortalPieChart} from "./UserPortalPieChart";

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
            <div className="grid grid-cols-8 px-20">
                <div className="col-span-6 md:col-span-3">
                    <UserPortalPieChart naslov={"Cenovni mesečni pregled naročnin"} />
                </div>
                <div className="col-span-6 md:col-span-5">

                </div>
            </div>
        </div>
    )
}