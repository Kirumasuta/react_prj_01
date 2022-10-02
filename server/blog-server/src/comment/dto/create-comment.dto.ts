import {IsNotEmpty} from "class-validator";

export class CreateCommentDto{
    @IsNotEmpty()
    readonly content: string;
    @IsNotEmpty()
    readonly user_id: number;
    @IsNotEmpty()
    readonly article_id: number;
    @IsNotEmpty()
    readonly createdAt: string;
}