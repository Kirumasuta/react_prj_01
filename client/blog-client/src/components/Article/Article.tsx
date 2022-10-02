import React, {useState} from 'react';
import {IArticle} from "../../types/type";
import {useNavigate} from "react-router-dom";

interface IArticleProps {
    article: IArticle;
}



export const Article = ({article}:IArticleProps) => {
    const [active, setActive] = useState(false);

    let navigate = useNavigate();
    const routeChange = () => {
        navigate("/article/"+article.id);
    }

    return (
        <div className={'article'}>
            <div className={'article_preview_content'}>
                <div onClick={routeChange}>
                    <div className={'article_preview_header'}>{article.header}</div>
                    <div>{article.preview_content}</div>
                    <div>
                        <img src={'data:image/jpeg;base64,'+article.img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};