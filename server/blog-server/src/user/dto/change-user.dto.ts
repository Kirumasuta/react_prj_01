import {IsNotEmpty} from "class-validator";

export class ChangeUserDto{
    @IsNotEmpty()
    readonly login: string;
    @IsNotEmpty()
    readonly changedAt: string;
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly password: string;
    @IsNotEmpty()
    readonly role_id: number;
}