import {Dispatch, SetStateAction} from "react";

export enum EArticleAction{
    GET_ARTICLES = 'GET_ARTICLES',
    CHANGE_ARTICLES = 'CHANGE_ARTICLES',
    DELETE_ARTICLE = 'DELETE_ARTICLE'
}

export enum ECommentAction {
    GET_COMMENTS = 'GET_COMMENTS',
    CREATE_COMMENTS = 'CREATE_COMMENTS',
    DELETE_COMMENT = 'DELETE_COMMENT'
}

export enum EUserAction {
    GET_USER = 'GET_USER',
    CREATE_USER = 'CREATE_USER',
    DELETE_USER = 'CHANGE_USER'
}

export interface ISignProps{
    signActive: boolean
    setActive: Dispatch<SetStateAction<boolean>>;
}

export interface IArticleCommentProps{
    article_id: number;
}

export interface IArticleListProps{
    articles: IArticle[];
    DataisLoaded: Boolean[];
}

export interface IArticle{
    id: number;
    header: string;
    preview_content: string;
    content: string;
    user_id: number;
    category_id: number;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IComment{
    id: number;
    content: string;
    user_id: number;
    article_id: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICommentProps {
    comment: IComment;
}

export interface ICategory{
    id: number;
    description: string;
}

export interface IUser{
    id: number;
    name: string;
    login: string;
    password: string;
    role_id: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserState {
    users: IUser[];
}

export interface ICommentState{
    comments: IComment[];
}

export interface IUserCreateAction {
    type: EUserAction.CREATE_USER
    payload: IUser;
}

export type IUserAction = IUserCreateAction;

export interface IArticleState {
    articles: IArticle[];
}

export interface IArticleReducer {
    articleReducer: IArticleState;
}

export interface IGetAction {
    type: EArticleAction.GET_ARTICLES,
    payload: string;
}

export type IArticleAction = IGetAction;