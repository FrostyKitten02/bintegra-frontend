import {UserDto} from "./interfaces";

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
}


export interface PackageOfferDto {
    id?: number,

    offerId?: number,
    fullDuration?: number,
    discountDuration?: number,
    discountPrice?: number,
    basePrice?: number,
    active?: boolean
    offer?: OfferDto;

}
export interface OffersWithPackageOffersDto extends OfferDto {
    packageOffers: PackageOfferDto[];
}


export interface OfferResponseDto {
    offer?: OfferDto;
    offersWithPackageOffers?: OffersWithPackageOffersDto[];
}


export interface UserResponseDto {
    success?: boolean;
    user?: UserDto;
}