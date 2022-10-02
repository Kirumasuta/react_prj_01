import {IsNotEmpty} from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    readonly login: string;
    @IsNotEmpty()
    readonly createdAt: string;
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly password: string;
    @IsNotEmpty()
    readonly role_id: number;
}