import axios, {AxiosResponse} from "axios";
import {OfferResponseDto} from "../../ResponseDtos";
import {OfferRequestDto} from "../../RequestDtos";
import {BaseController} from "./BaseController";


export class OffersController extends BaseController<OfferRequestDto> {

    constructor(auth?: string) {
        super(auth, "offer");
    }

    public getActiveOffersByType(type: string): Promise<AxiosResponse<OfferResponseDto>> {
        const endpointUrl = "/active";
        return axios.get<OfferResponseDto, AxiosResponse<OfferResponseDto, any>, OfferRequestDto>(this.getControllerFullUrl(endpointUrl,[type]), this.axiosConfig);
    }



}