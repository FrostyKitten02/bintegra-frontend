import {Outlet} from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function TemplatePage() {

    return (
        <div className="flex flex-col">
            <NavigationBar />
            <Outlet />
        </ div>
    )
}