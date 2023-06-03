
export interface User {
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    repeatPassword?: string,
    newPassword?: string,
    terms?: boolean;
}


export interface UserDto {
    id?: number,
    email?: string,
}