import {BaseController} from "./BaseController";
import {SubscriptionResponseDto} from "../../ResponseDtos";
import axios, {AxiosResponse} from "axios";
import {SubscriptionRequestDto} from "../../RequestDtos";


export class SubscriptionController extends BaseController<SubscriptionRequestDto>{
    constructor(auth?: string) {
        super(auth, "subscription");
    }
    public subscribe(subscriptionContract: string, chosenOffer?: number, phoneId?: number): Promise<AxiosResponse<SubscriptionResponseDto>> {
        const contract: boolean = subscriptionContract === "vezava";
        const req: SubscriptionRequestDto = {
            subscription: {
                offerId: chosenOffer,
                startDate: Date.now(),
                phoneId: phoneId,
                subscriptionContract: contract,
            }
        }
        const endpointUrl = "/subscribe"
        return axios.post<SubscriptionResponseDto, AxiosResponse<SubscriptionResponseDto, any>, SubscriptionRequestDto>(this.getControllerFullUrl(endpointUrl,undefined), req, this.axiosConfig)
    }
}