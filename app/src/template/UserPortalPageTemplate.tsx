import {Outlet} from "react-router-dom";
import UserPortalSideNavigation from "../components/UserPortalSideNavigation";


export default function UserPortalPageTemplate() {


    return(
        <div className="flex">
            {/*sidebar za vsako storitev svoj tab*/}
            <div className="h-screen hidden md:block">
                <UserPortalSideNavigation />
            </div>
            {/*main content*/}
            <div className="flex justify-center w-full">
                <Outlet />
            </div>
        </div>
    )
}