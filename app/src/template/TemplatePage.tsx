import {Outlet} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import AppFooter from "./AppFooter";
import UserNavBar from "./UserNavBar";

export default function TemplatePage() {

    return (
        <div className="flex flex-col">
            <UserNavBar />
            <NavigationBar />
            <Outlet />
            <AppFooter />
        </ div>
    )
}