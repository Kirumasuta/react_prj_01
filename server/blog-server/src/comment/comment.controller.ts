import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {ChangeCommentDto} from "./dto/change-comment.dto";

@Controller('comment')
export class CommentController{
    constructor(
        private readonly commentService: CommentService
    ) {}

    @Get(':article_id/:quantity')
    getCommentByOneArticle(@Param('article_id') article_id: number,
                           @Param('quantity') quantity: number){
        return this.commentService.findByOneArticle(article_id,quantity);
    }

    @Patch(':id')
    changeComment(@Body() changeComment: ChangeCommentDto, @Param('id') id: number){
        return this.commentService.update(id, changeComment);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type','Application/json')
    createComment(@Body() createComment: CreateCommentDto){
        return this.commentService.create(createComment);
    }

    @Delete(':id')
    deleteArticle(@Param('id') id: number){
        return this.commentService.remove(id);
    }

}