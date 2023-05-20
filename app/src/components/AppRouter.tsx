import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import TemplatePage from "../template/TemplatePage";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import HomePage from "../pages/HomePage";
import NarocninePage from "../pages/NarocninePage";
import OmrezjePage from "../pages/OmrezjePage";
import WifiPage from "../pages/WifiPage";
import TvPage from "../pages/TvPage";


export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <TemplatePage />,
            errorElement: <PageNotFoundPage />,
            children: [
                {
                    path: "/homepage",
                    element: <HomePage />,
                },
                {
                    path: "/narocnine",
                    element: <NarocninePage />,
                },
                {
                    path: "/omrezje",
                    element: <OmrezjePage />,
                },{
                    path: "/tvpaketi",
                    element: <TvPage />,
                },
                {
                    path: "/wifi",
                    element: <WifiPage />,
                }
            ]
        }
    ])


    return <RouterProvider router={router} />
}