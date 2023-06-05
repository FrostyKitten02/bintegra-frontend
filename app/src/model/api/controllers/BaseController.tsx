import {AxiosRequestConfig} from "axios";

//you should never create an instance of this class, it is used as a base class for other controllers
//should be used as an abstract class
//TODO maybe use abstract class insted of this!!
export class BaseController<REQ> {
    protected auth?: string;
    private static readonly BASE_URL = "http://localhost:8080/o/sp/api/";
    private readonly CONTROLLER_URL;
    protected readonly axiosConfig: AxiosRequestConfig<REQ>;

    constructor(auth: string | undefined, controllerUrl: string) {
        //TODO variables not needed!!
        if (auth !== undefined) {
            this.auth = "Basic " +  auth;
        }

        this.CONTROLLER_URL = controllerUrl;
        this.axiosConfig = this.createAxiosConfig();
    }

    private createAxiosConfig(): AxiosRequestConfig<REQ> {

        if (this.auth !== undefined) {
            return  {
                headers: {
                    "Authorization": this.auth,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin"
                }
            };
        }

        return  {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin"
            }
        };


    }

    protected getControllerFullUrl(endpointUrl?: string, pathParams?: string[]): string {
        let extraPath = "";

        if (pathParams !== undefined) {
            for (let i in pathParams) {
                extraPath += "/" + pathParams[i];
            }
        }

        endpointUrl = endpointUrl??"";
        return BaseController.BASE_URL + this.CONTROLLER_URL + endpointUrl + extraPath;
    }

}