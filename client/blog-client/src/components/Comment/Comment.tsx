import React from 'react';
import {ICommentProps} from "../../types/type";

export const Comment = ({comment}:ICommentProps) => {
    return (
        <div className={'comment_content'}>
            <span >{comment.content}</span>
            <span className={'comment_date'}>{new Date(comment.createdAt).toLocaleDateString("ru-RU").toString()}</span>
        </div>
    );
};