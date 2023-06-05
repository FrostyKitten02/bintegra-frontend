
export interface OfferRequestDto {

}


export interface UserRequestDto {
    loginRequest?: LoginRequestDto,
    registerRequest?: RegisterRequestDto
}

export interface LoginRequestDto {
    email?: string,
    password?: string
}

export interface RegisterRequestDto {
    email?: string;
    password?: string;
    repeatPassword?: string;

    male?: boolean;
    firstName?: string;
    lastName?: string;

    birthYear?: number;
    birthMonth?: number;
    birthDay?: number;
}