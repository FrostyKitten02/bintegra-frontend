import {BaseController} from "./BaseController";
import {UserResponseDto} from "../../ResponseDtos";
import axios, {Axios, AxiosResponse} from "axios";
import {UserRequestDto} from "../../RequestDtos";


export class UserController extends BaseController<UserResponseDto>{

    constructor(auth?: string) {
        super(auth, "user");
    }

    public login(email: string, password: string): Promise<AxiosResponse<UserResponseDto>> {
        const endpointUrl = "/login";
        const req: UserRequestDto = {
            loginRequest: {
                email: email,
                password: password
            }
        }
        return axios.post<UserResponseDto, AxiosResponse<UserResponseDto, any>, UserRequestDto>(this.getControllerFullUrl(endpointUrl), req);
    }

}