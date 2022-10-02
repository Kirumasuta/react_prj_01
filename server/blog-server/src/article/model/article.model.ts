import {Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "@sequelize/core";

@Table({tableName: 'article'})
export class Article extends Model{
    @Column
    header: string;
    @Column
    preview_content: string;
    @Column
    content: string;
    @Column({defaultValue: Date.now()})
    createdAt: Date;
    @Column
    updatedAt: Date;
    @Column
    user_id: number;
    @Column
    img: string;
    @Column
    category_id: number;
}