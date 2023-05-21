import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import TemplatePage from "../template/TemplatePage";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import HomePage from "../pages/HomePage";
import MobilePlansPage from "../pages/MobilePlansPage";
import InternetPlansPage from "../pages/InternetPlansPage";
import MobileInternetPlans from "../pages/MobileInternetPlans";
import TelevisionPlansPage from "../pages/TelevisionPlansPage";
import Paths from "../Paths";


export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <TemplatePage />,
            errorElement: <PageNotFoundPage />,
            children: [
                {
                    path: Paths.HOME,
                    element: <HomePage />,
                },
                {
                    path: Paths.MOBILE_PLANS,
                    element: <MobilePlansPage />,
                },
                {
                    path: Paths.INTERNET_PLANS,
                    element: <InternetPlansPage />,
                },
                {
                    path: Paths.TV_PLANS,
                    element: <TelevisionPlansPage />,
                },
                {
                    path: Paths.MOBILE_INTERNET_PLANS,
                    element: <MobileInternetPlans />,
                }
            ]
        }
    ])


    return <RouterProvider router={router} />
}