import { IsNotEmpty } from 'class-validator';
import {DataTypes} from "sequelize";

export class CreateArticleDto {
    @IsNotEmpty()
    readonly header: string;
    @IsNotEmpty()
    readonly preview_content: string;
    @IsNotEmpty()
    readonly content: string;
    @IsNotEmpty()
    readonly createdAt: Date;
    @IsNotEmpty()
    readonly updatedAt: Date;
    @IsNotEmpty()
    readonly user_id: number;
    @IsNotEmpty()
    readonly img: string;
    @IsNotEmpty()
    readonly category_id: number;
}