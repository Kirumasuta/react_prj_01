import {ArticleService} from "./article.service";
import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {CreateArticleDto} from "./dto/create-article.dto";
import {ChangeArticleDto} from "./dto/change-article.dto";

@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService: ArticleService
    ) {}

    @Get()
    getAllArticles(){
        return this.articleService.findAll();
    }

    @Get(':id')
    getOneArticle(@Param('id') id: number){
        return this.articleService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type','Application/json')
    createArticle(@Body() createArticle: CreateArticleDto){
        return this.articleService.create(createArticle);
    }

    @Patch(':id')
    changeArticle(@Body() changeArticle: ChangeArticleDto, @Param('id') id: number){
        return this.articleService.update(id, changeArticle);
    }

    @Delete(':id')
    deleteArticle(@Param('id') id: number){
        return this.articleService.remove(id);
    }
}