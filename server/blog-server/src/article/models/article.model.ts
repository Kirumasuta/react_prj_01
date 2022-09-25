import {Column, Model, Table} from "sequelize-typescript";
import { DataTypes } from "sequelize";

@Table
export class Article extends Model{
    @Column
    header: string;
    @Column
    preview_content: string;
    @Column
    content: string;
    @Column({defaultValue: Date.now()})
    create_date: Date;
    @Column
    change_date: Date;
    @Column
    user_id: number;
    // @Column
    // img: DataTypes.BlobDataType;
    @Column
    category_id: number;
}