import {OfferDto} from "./ResponseDtos";

export interface User {
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    repeatPassword?: string,
    newPassword?: string,
    terms?: boolean;
}

export interface SubscriptionDto {
    offerId?: number,
    startDate?: number,
    phoneId?: number,
    subscriptionContract?: boolean,
    offer?: OfferDto

}


export interface UserDto {
    id?: number,
    email?: string,
    male?: boolean,

    firstname?: string,
    lastname?: string,

    birthYear?: number,
    birthMonth?: number,
    birthDay?: number,

    isConsultant?: boolean,
}