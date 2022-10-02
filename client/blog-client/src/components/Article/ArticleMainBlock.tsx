import React, {useEffect, useState} from 'react';
import {IArticle, IArticleCommentProps, ICategory} from "../../types/type";
import {Article} from "./Article";
import {CommentBlock} from "../Comment/CommentBlock";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {ArticleApi, CategoryApi} from "../../api";

export const ArticleMainBlock = () => {
    const {article_id} = useParams();
    const navigate = useNavigate();
    const id:any = article_id;

    const [ state, setState ] = useState({
        article: [],
        category: [],
        DataisLoaded: false
    });

    useEffect(()=>{
        if (state.DataisLoaded) return;
        ArticleApi.getOneArticle(article_id)
            .then((res)=>JSON.stringify(res))
            .then((json_article)=>{
                CategoryApi.getCategoryName(JSON.parse(json_article).category_id)
                    .then((res)=>JSON.stringify(res))
                    .then((json_category)=>{
                        setState({
                            article: JSON.parse(json_article),
                            category: JSON.parse(json_category),
                            DataisLoaded: true
                        });
                    });
            });
    });

    const article: IArticle = JSON.parse(JSON.stringify(state.article));
    const category: ICategory = JSON.parse(JSON.stringify(state.category));


    return (
        <div className={'article_main'}>
            <div className={'article_main_content'}>
                <div>
                    <div className={'article_main_header'}>{article.header}</div>
                    <div className={'article_text'}>
                        <div className={article.img ? 'article_img' : ''}>
                            <img src={'data:image/jpeg;base64,'+article.img} alt=""/>
                        </div>
                        <div style={{textIndent:article.img ? '' : '45px'}}>
                            {article.content}
                        </div>
                    </div>
                </div>
                <div className={'article_date'} onClick={()=>{navigate("/category/"+category.id)}}>
                    Category: {category.description}
                </div>
                <div className={'article_date'}>
                    {new Date(article.createdAt).toLocaleDateString("ru-RU").toString()}
                </div>
                <CommentBlock article_id={id}/>
            </div>
        </div>
    );
};