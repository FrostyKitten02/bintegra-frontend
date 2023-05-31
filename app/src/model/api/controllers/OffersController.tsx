import axios, {AxiosResponse} from "axios";
import {OfferResponseDto} from "../../ResponseDtos";
import {OfferRequestDto} from "../../RequestDtos";
import {BaseController} from "./BaseController";


export class OffersController extends BaseController<OfferResponseDto> {
    private static readonly CONTROLLER_URL = "offer";

    constructor(auth: string) {
        super(auth, OffersController.CONTROLLER_URL);
    }

    public getActiveOffersByType(type: string): Promise<AxiosResponse<OfferResponseDto>> {
        const endpointUrl = "/active";
        return axios.get<OfferResponseDto, AxiosResponse<OfferResponseDto>, OfferRequestDto>(this.getControllerFullUrl(endpointUrl,[type]), this.axiosConfig);
    }



}