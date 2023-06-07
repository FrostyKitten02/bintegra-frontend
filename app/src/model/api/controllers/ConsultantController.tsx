import {BaseController} from "./BaseController";
import {ConsultantRequestDto} from "../../RequestDtos";
import {ConsultantResponseDto} from "../../ResponseDtos";
import axios, {AxiosResponse} from "axios";


export class ConsultantController extends BaseController<ConsultantRequestDto> {

    constructor(auth?: string) {
        super(auth, "consultant");
    }

    public getConsultantCustomers(signal?: AbortSignal): Promise<AxiosResponse<ConsultantResponseDto>> {
        return axios.get<ConsultantResponseDto, AxiosResponse<ConsultantResponseDto, any>, ConsultantRequestDto>(this.getControllerFullUrl("/customers", undefined), {...this.axiosConfig, signal: signal});
    }


}