import {SubscriptionDto, UserDto} from "./interfaces";

export interface OfferDto {
    id?: number,

    title?: string,
    type?: string,
    description?: string,
    active?: boolean


    //mobile fields!!
    mobileData?: number,
    mobileMinutes?: number,
    mobileSms?: number,

    //TV fields!!
    programsNumber?: number,
    defaultNumberOfTvs?: number,

    //internet fields!!
    downloadSpeed?: number,
    uploadSpeed?: number,

    //durations
    fullDurationMonths?: number,
    discountDurationMonths?: number,


    //pricing
    basePrice?: number,
    discountPrice?: number,

}

export interface OfferResponseDto {
    offer?: OfferDto;
    offers?: OfferDto[];
}


export interface UserResponseDto {
    success?: boolean;
    user?: UserDto;
}

export interface SubscriptionResponseDto {
    subscriptionId?: number,
    subscriptions?: SubscriptionDto []
}