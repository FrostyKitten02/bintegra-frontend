import axios, {AxiosResponse} from "axios";
import {OfferResponseDto} from "../../ResponseDtos";
import {OfferRequestDto} from "../../RequestDtos";
import {BaseController} from "./BaseController";


export class OffersController extends BaseController<OfferResponseDto> {

    constructor(auth?: string) {
        super(auth, "offer");
    }

    public getActiveOffersByType(type: string): Promise<AxiosResponse<OfferResponseDto>> {
        const endpointUrl = "/active";
        return axios.get<OfferResponseDto, AxiosResponse<OfferResponseDto, any>, OfferRequestDto>(this.getControllerFullUrl(endpointUrl, [type]), this.axiosConfig);
    }

    public getOfferById(id: string): Promise<AxiosResponse<OfferResponseDto>> {
        return axios.get<OfferResponseDto, AxiosResponse<OfferResponseDto, any>, OfferRequestDto>(this.getControllerFullUrl(undefined, [id]), this.axiosConfig);
    }

}