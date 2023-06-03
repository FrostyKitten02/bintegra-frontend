

export interface OfferRequestDto {

}


export interface UserRequestDto {
    loginRequest?: LoginRequestDto,
}

export interface LoginRequestDto {
    email?: string,
    password?: string
}