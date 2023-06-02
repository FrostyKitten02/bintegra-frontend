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
import UserProfile from "../template/UserPortalPageTemplate";
import UserPortalMobileOverviewPage from "../pages/profile/UserPortalMobileOverviewPage";
import UserPortalDefaultPage from "../pages/profile/UserPortalDefaultPage";
import UserPortalProfile from "../pages/profile/UserPortalProfile";
import UserPortalTvOverviewPage from "../pages/profile/UserPortalTvOverviewPage";
import {UserPortalInternetOverview} from "../pages/profile/UserPortalInternetOverview";
import {ChoosePlanPage} from "../pages/ChoosePlanPage";


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
                    path: Paths.USER_PORTAL_BASE_PATH,
                    element: <UserProfile />,
                    children: [
                        {
                            path: Paths.USER_PORTAL_BASE_PATH,
                            element: <UserPortalDefaultPage />,
                        },
                        {
                            path: Paths.USER_PORTAL_PROFILE,
                            element: <UserPortalProfile />
                        },
                        {
                            path: Paths.USER_PORTAL_MOBILE,
                            element: <UserPortalMobileOverviewPage />,
                        },
                        {
                            path: Paths.USER_PORTAL_INTERNET,
                            element: <UserPortalInternetOverview />,
                        },
                        {
                            path: Paths.USER_PORTAL_TV,
                            element: <UserPortalTvOverviewPage />,
                        }
                    ]
                },
                {
                    path: Paths.MOBILE_PLANS,
                    element: <MobilePlansPage />,
                },
                {
                    path: Paths.MOBILE_PLANS_OFFER,
                    element: <ChoosePlanPage />
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