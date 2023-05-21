

export default class Paths {
    public static readonly HOME = "";
    public static readonly LOGIN = Paths.HOME + "/prijava";
    public static readonly REGISTER = Paths.HOME + "/registracija";


    public static readonly PACKAGES_BASE_PATH = Paths.HOME + "/paketi"
    public static readonly MOBILE_PLANS = Paths.HOME + Paths.PACKAGES_BASE_PATH + "/mobilni";
    public static readonly INTERNET_PLANS = Paths.HOME + Paths.PACKAGES_BASE_PATH + "/internet";
    public static readonly TV_PLANS = Paths.HOME + Paths.PACKAGES_BASE_PATH + "/televizija/";
    public static readonly MOBILE_INTERNET_PLANS = Paths.HOME + Paths.PACKAGES_BASE_PATH + "/mobilini-internet";



    public static readonly USER_BASE_PATH = Paths.HOME + "/uporabnik";
    public static readonly USER_PROFILE = Paths.USER_BASE_PATH + "/profil";
    public static readonly USER_PROFILE_MOBILE = Paths.USER_PROFILE + "/mobilni";

}


