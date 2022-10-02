import {IsNotEmpty} from "class-validator";

export class ChangeCommentDto{
    @IsNotEmpty()
    readonly content: string;
}