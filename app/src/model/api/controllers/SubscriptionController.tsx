import {BaseController} from "./BaseController";
import {OfferDto, OfferResponseDto} from "../../ResponseDtos";
import axios from "axios";
import {SubscriptionRequestDto} from "../../RequestDtos";


export class SubscriptionController extends BaseController<OfferResponseDto>{
    constructor(auth?: string) {
        super(auth, "subscription");
    }
    public subscribe(subscriptionContract: string, chosenOffer?: number, phoneId?: number) {
        const contract: boolean = subscriptionContract === "vezava" ? true : false;
        const req: SubscriptionRequestDto = {
            subscription: {
                offerId: chosenOffer,
                startDate: Date.now(),
                phoneId: phoneId,
                subscriptionContract: contract,
            }
        }
        const endpointUrl = "/subscribe"
        return axios.post(this.getControllerFullUrl(endpointUrl, undefined), {}, this.axiosConfig)
    }
}