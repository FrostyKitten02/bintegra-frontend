import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TemplatePage from "../template/TemplatePage";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import HomePage from "../pages/HomePage";
import MobilePlansPage from "../pages/MobilePlansPage";
import InternetPlansPage from "../pages/InternetPlansPage";
import MobileInternetPlans from "../pages/MobileInternetPlans";
import TelevisionPlansPage from "../pages/TelevisionPlansPage";
import Paths from "../Paths";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfile from "../template/UserProfilePageTemplate";
import UserProfileMobileOverviewPage from "../pages/UserProfileMobileOverviewPage";


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
                    path: Paths.LOGIN,
                    element: <LoginPage />,
                },
                {
                    path: Paths.REGISTER,
                    element: <RegisterPage />,
                },
                {
                    path: Paths.USER_PROFILE,
                    element: <UserProfile />,
                    children: [
                        {
                            path: Paths.USER_PROFILE,
                            element: <div>user profile main page</div>,
                        },
                        {
                            path: Paths.USER_PROFILE_MOBILE,
                            element: <UserProfileMobileOverviewPage />,
                        }
                    ]
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
                },
            ]
        }
    ])


    return <RouterProvider router={router} />
}