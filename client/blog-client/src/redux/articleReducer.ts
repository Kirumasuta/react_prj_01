import {EArticleAction, IArticleAction, IArticleState} from "../types/type";

export const initState = {
    articles: []
}


export const articleReducer = (state: IArticleState = initState, action: IArticleAction)=>{
    switch (action.type) {
        case EArticleAction.GET_ARTICLES:
            return { article:[...state.articles, action.payload]}
        default:
            return state;
    }
}