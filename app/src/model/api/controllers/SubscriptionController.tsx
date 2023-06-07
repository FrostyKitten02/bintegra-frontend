import {BaseController} from "./BaseController";
import {SubscriptionResponseDto} from "../../ResponseDtos";
import axios, {AxiosResponse} from "axios";
import {SubscriptionRequestDto} from "../../RequestDtos";


export class SubscriptionController extends BaseController<SubscriptionRequestDto>{
    constructor(auth?: string) {
        super(auth, "subscription");
    }
    public subscribe(subscriptionContract: string, chosenOffer?: number, phoneId?: number, signal?: AbortSignal): Promise<AxiosResponse<SubscriptionResponseDto>> {
        const contract: boolean = subscriptionContract === "vezava";
        const req: SubscriptionRequestDto = {
            subscription: {
                offerId: chosenOffer,
                startDate: Date.now(),
                phoneId: phoneId,
                subscriptionContract: contract,
            }
        }
        const endpointUrl: string = "/subscribe"
        return axios.post<SubscriptionResponseDto, AxiosResponse<SubscriptionResponseDto, any>, SubscriptionRequestDto>(this.getControllerFullUrl(endpointUrl,undefined), req, {...this.axiosConfig, signal: signal})
    }
    public getSubscriptionsByUser(signal?: AbortSignal):Promise<AxiosResponse<SubscriptionResponseDto>>  {
        return axios.get<SubscriptionResponseDto, AxiosResponse<SubscriptionResponseDto, any>, SubscriptionRequestDto>(this.getControllerFullUrl(undefined, undefined), {...this.axiosConfig, signal: signal});
    }

    public getSubscriptionByUserId(id: string, signal?: AbortSignal):Promise<AxiosResponse<SubscriptionResponseDto>>{
        return axios.get<SubscriptionResponseDto, AxiosResponse<SubscriptionResponseDto, any>, SubscriptionRequestDto>(this.getControllerFullUrl(undefined, [id]), {...this.axiosConfig, signal: signal});
    }

}