import React, {useEffect, useLayoutEffect, useReducer, useState} from 'react';
import {IArticle} from "../../types/type";
import {Article} from "./Article";
import {useParams} from "react-router";
import {ArticleCategorySwitcherApi} from "../../api";


export const ArticleList  = () => {
    const {category_id} = useParams();
    const [ state, setState ] = useState({
        articles: [],
        isLoad: false
    });
    const [prevCategory, setNewCategory] = useState('');

    const prevExpression = prevCategory === category_id;

    if (prevCategory != category_id){
        setNewCategory(category_id!);
    }
    useEffect(()=>{
        if (state.isLoad && !prevExpression) return;

        const article_url:string = 'http://localhost:3000/article';
        ArticleCategorySwitcherApi.getArticleCategory(category_id ? article_url+'/category/'+category_id : article_url)
            .then((res)=>JSON.stringify(res))
            .then((json)=>{
                setState({
                    articles: JSON.parse(json),
                    isLoad: true
                });
            });
    },[prevCategory]);

    return (
        <div className={'article_root'}>
            <div className={'article_list'}>
                {state.articles.map((article:IArticle)=>
                    <Article article={article}/>
                )
                }
            </div>
        </div>
    );
};