import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName: 'comment'})
export class Comment extends Model{
    @Column
    createdAt: Date;
    @Column
    content: string;
    @Column
    user_id: number;
    @Column
    article_id: number;
}