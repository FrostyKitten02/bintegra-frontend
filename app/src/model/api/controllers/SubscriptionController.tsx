import {BaseController} from "./BaseController";
import {OfferDto, OfferResponseDto, SubscriptionResponseDto} from "../../ResponseDtos";
import axios, {AxiosResponse} from "axios";
import {SubscriptionRequestDto} from "../../RequestDtos";


export class SubscriptionController extends BaseController<SubscriptionRequestDto>{
    constructor(auth?: string) {
        super(auth, "subscription");
    }
    public subscribe(subscriptionContract: string, chosenOffer?: number, phoneId?: number): Promise<AxiosResponse<SubscriptionResponseDto>> {
        const contract: boolean = subscriptionContract === "vezava" ? true : false;
        const req: SubscriptionRequestDto = {
            subscription: {
                offerId: chosenOffer,
                startDate: Date.now(),
                phoneId: phoneId,
                subscriptionContract: contract,
            }
        }
        const reqTemp: SubscriptionRequestDto = {
            subscription: {
                offerId: undefined,
                startDate: undefined,
                phoneId: undefined,
                subscriptionContract: undefined,
            }
        }
        const endpointUrl = "/subscribe"
        return axios.post<SubscriptionResponseDto, AxiosResponse<SubscriptionResponseDto, any>, SubscriptionRequestDto>(this.getControllerFullUrl(endpointUrl,undefined), reqTemp, this.axiosConfig)
    }
}