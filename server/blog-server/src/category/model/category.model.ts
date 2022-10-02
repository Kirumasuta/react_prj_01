import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName: 'category'})
export class Category extends Model{
    @Column
    description: string;
}
