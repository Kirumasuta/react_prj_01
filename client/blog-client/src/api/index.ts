import {IArticle, IArticleCommentProps, ICategory, IComment, ICommentState, IUser, IUserState} from "../types/type";
import axios from "axios";

export class UserApi {
    static async createUser(user: Partial<IUser>): Promise<IUserState>{
        const res = await axios.post('http://localhost:3000/user',user);
        return res.data;
    }
}


export class ArticleApi {
    static async getAllArticles() : Promise<IArticle[]>{
        let res = await axios.get('http://localhost:3000/article');
        return res.data;
    }

    static async getOneArticle(id:string|undefined): Promise<IArticle>{
        let res = await axios.get('http://localhost:3000/article/'+id);
        return res.data;
    }
}


export class CommentApi {
    static async createComment(comment: Partial<IComment>): Promise<ICommentState>{
        const res = await axios.post('http://localhost:3000/comment',comment);
        return res.data;
    }

    static async getComments(article_id:number,commentQuantity:number):Promise<IComment[]>{
        let res = await axios.get('http://localhost:3000/comment/'+article_id+'/'+commentQuantity);
        return res.data;
    }
}


export class CategoryApi{
    static async getCategoryName(id:number): Promise<ICategory>{
        let res = await axios.get('http://localhost:3000/category/'+id);
        return res.data;
    }

    static async getAllCategories(): Promise<ICategory[]>{
        let res = await axios.get('http://localhost:3000/category');
        return res.data;
    }
}


export class ArticleCategorySwitcherApi{
    static async getArticleCategory(url:string): Promise<IArticle[]>{
        let res = await axios.get(url);
        return res.data;
    }
}