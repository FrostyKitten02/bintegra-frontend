import {SubscriptionDto} from "./interfaces";
import {OfferDto} from "./ResponseDtos";


export interface OfferRequestDto {
    offer?: OfferDto;
}

export interface SubscriptionRequestDto {
    subscription?: SubscriptionDto;

}

export interface UserRequestDto {
    loginRequest?: LoginRequestDto,
}

export interface LoginRequestDto {
    email?: string,
    password?: string
}