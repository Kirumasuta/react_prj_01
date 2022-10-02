import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Article} from "./model/article.model";
import {ArticleService} from "./article.service";
import {ArticleController} from "./article.controller";

@Module({
    imports: [SequelizeModule.forFeature([Article])],
    providers: [ArticleService],
    controllers: [ArticleController]
})
export class ArticleModule{}
