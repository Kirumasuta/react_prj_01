import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import { Comment } from './model/comment.model';
import {CreateCommentDto} from "./dto/create-comment.dto";
import {ChangeCommentDto} from "./dto/change-comment.dto";

@Injectable()
export class CommentService{
    constructor(
        @InjectModel(Comment)
        private comment_model: typeof Comment
    ) {}

    async findAll(): Promise<Comment[]> {
        return this.comment_model.findAll();
    }

    async findOne(id: number): Promise<Comment> {
        return this.comment_model.findOne({
            where: {
                id
            }
        });
    }

    async findByOneArticle(article_id: number,quantity: number): Promise<Comment[]> {
        return this.comment_model.findAll({
            where: {
                article_id
            },
            limit:quantity
        });
    }

    create(createComment: CreateCommentDto): Promise<Comment> {
        const comment = new Comment();

        comment.content = createComment.content;
        comment.user_id = createComment.user_id;
        comment.article_id = createComment.article_id;

        return comment.save();
    }

    update(id: number, changeComment: ChangeCommentDto): Promise<[affectedCount: number,
                                                                  affectedRows: Comment[]]>{
        return this.comment_model.update(
            {...changeComment},
            {where:{
                id
                },returning: true}
        )
    }

    async remove(id: number): Promise<void>{
        const comment = await this.findOne(id);
        await comment.destroy();
    }
}