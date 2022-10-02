import React, {useEffect, useState} from 'react';
import {IArticle, IArticleCommentProps, IComment} from "../../types/type";
import {Comment} from "./Comment";
import {CommentApi, UserApi} from "../../api";

export const CommentBlock = (article_id: IArticleCommentProps) => {

    const [ state, setState ] = useState({
        comment: [],
        DataisLoaded: false
    });

    const [commentQuantity, setQuantity] = useState(5);
    useEffect(()=>{
        CommentApi.getComments(article_id.article_id,commentQuantity)
            .then((res)=>JSON.stringify(res))
            .then((json)=>{
                setState({
                    comment: JSON.parse(json),
                    DataisLoaded: true
                });
            });
    },[commentQuantity]);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const comment = {
            article_id: article_id.article_id,
            content: e.target.comment.value,
            user_id: 1
        }
        CommentApi.createComment(comment)
            .catch(error => console.error('Error:', error))
            .then(res=>{
                console.log('Success:',res);
                if (state.comment.length < commentQuantity){
                    setQuantity(commentQuantity+1);
                }
            })
    }

    return (
        <div>
            <div className={'comment_block'}>
                Comments
                {state.comment.map((comment:IComment)=>
                    <Comment comment={comment} />
                )}
            </div>
            <div className={state.comment.length < commentQuantity ? 'comment_more_block disable' : 'comment_more_block'}>
                <button className={'comment_more_button'}
                     onClick={()=>{setQuantity(commentQuantity+5)}}>
                    More
                </button>
            </div>
            <div className={'comment_input_block'}>
                <div className={'comment_input'}>
                    <form className={'comment_form'} onSubmit={(event)=>handleSubmit(event)}>
                        <label htmlFor="comment"></label>
                        <input placeholder={'Comment'} type="text" name='comment'/>

                        <button type={"submit"}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};