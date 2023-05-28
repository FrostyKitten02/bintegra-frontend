import {Outlet} from "react-router-dom";
import UserProfileSideNavigation from "../components/UserProfileSideNavigation";


export default function UserProfilePageTemplate() {


    return(
        <div className="flex">
            {/*sidebar za vsako storitev svoj tab*/}
            <div className="h-screen">
                <UserProfileSideNavigation />
            </div>
            {/*main content*/}
            <div className="flex justify-center w-full">
                <Outlet />
            </div>
        </div>
    )
}