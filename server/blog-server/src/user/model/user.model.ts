import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName:'user'})
export class User extends Model{
    @Column
    login: string;
    @Column
    createdAt: Date;
    @Column
    updatedAt: Date;
    @Column
    role_id: number;
    @Column
    name: string;
    @Column
    password: string;

}