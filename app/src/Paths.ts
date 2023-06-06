

export default class Paths {
    public static readonly HOME = "";
    public static readonly LOGIN = Paths.HOME + "/prijava";
    public static readonly REGISTER = Paths.HOME + "/registracija";


    public static readonly PACKAGES_BASE_PATH = Paths.HOME + "/paketi"
    public static readonly MOBILE_PLANS = Paths.PACKAGES_BASE_PATH + "/mobilni";
    public static readonly MOBILE_PLANS_OFFER = Paths.MOBILE_PLANS + "/:id";
    public static readonly INTERNET_PLANS = Paths.PACKAGES_BASE_PATH + "/internet";
    public static readonly INTERNET_PLANS_OFFER = Paths.INTERNET_PLANS + "/:id";
    public static readonly TV_PLANS = Paths.PACKAGES_BASE_PATH + "/televizija";
    public static readonly TV_PLANS_OFFER = Paths.TV_PLANS + "/:id";
    public static readonly MOBILE_INTERNET_PLANS = Paths.PACKAGES_BASE_PATH + "/mobilini-internet";

    public static readonly USER_BASE_PATH = Paths.HOME + "/uporabnik";
    public static readonly POGOSTA_VPRASANJA = Paths.HOME + "/vprasanja";
    public static readonly SIGN_OUT = Paths.HOME + "/odjava";

    //USER PAGES
    public static readonly USER_PORTAL_BASE_PATH = Paths.USER_BASE_PATH + "/portal";
    public static readonly USER_PORTAL_CONSULTANT_CUSTOMERS = Paths.USER_PORTAL_BASE_PATH + "/stranke";
    public static readonly USER_PORTAL_MOBILE = Paths.USER_PORTAL_BASE_PATH + "/mobilne-storitve";
    public static readonly USER_PORTAL_PROFILE = Paths.USER_PORTAL_BASE_PATH + "/profil";
    public static readonly USER_PORTAL_INTERNET = Paths.USER_PORTAL_BASE_PATH + "/internet";
    public static readonly USER_PORTAL_TV = Paths.USER_PORTAL_BASE_PATH + "/televizija";

    //CONSULTANT PAGES
    public static readonly USER_PORTAL_CONSULTANT_CUSTOMERS =  Paths.USER_PORTAL_BASE_PATH + "/stranke";
    public static readonly USER_PORTAL_CONSULTANT_CUSTOMER_SUBSCRIPTIONS =  Paths.USER_PORTAL_CONSULTANT_CUSTOMERS + "/:id";


}


