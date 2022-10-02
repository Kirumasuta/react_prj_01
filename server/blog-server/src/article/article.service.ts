import {Injectable} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Article } from './model/article.model';
import {CreateArticleDto} from "./dto/create-article.dto";
import {ChangeArticleDto} from "./dto/change-article.dto";

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article)
        private article_model: typeof Article
    ) {
    }

    async findAll(): Promise<Article[]> {
        return this.article_model.findAll();
    }

    async findOne(id: number): Promise<Article> {
        return this.article_model.findOne({
            where: {
                id
            }
        });
    }

    async findByCategory(category_id: number): Promise<Article[]> {
        return this.article_model.findAll({
            where: {
                category_id
            }
        });
    }

    create(createArticle: CreateArticleDto): Promise<Article> {
        const article = new Article();

        article.header = createArticle.header;
        article.preview_content = createArticle.preview_content;
        article.content = createArticle.content;
        article.user_id = createArticle.user_id;
        //article.img = createArticle.img;
        article.category_id = createArticle.category_id;

        return article.save();
    }

    update(id: number, changeArticle: ChangeArticleDto): Promise<[affectedCount: number,
                                                                  affectedRows: Article[]]> {
        return this.article_model.update(
            {...changeArticle},
            {
                where:{
                    id
                },
                returning: true,
            }
        )
    };

    async remove(id: number): Promise<void>{
        const article = await this.findOne(id);
        await article.destroy();
    }
}