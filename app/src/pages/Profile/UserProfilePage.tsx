import {Outlet} from "react-router-dom";


export default function UserProfilePage() {


    return(
        <div>
            {/*sidebar za vsako storitev svoj tab*/}
            <div>

            </div>
            {/*main content*/}
            <div>
                <Outlet />
            </div>
        </div>
    )
}