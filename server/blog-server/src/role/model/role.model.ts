import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName: 'role'})
export class Role extends Model{
    @Column
    description: string;
}