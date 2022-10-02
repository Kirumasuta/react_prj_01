import {ArticleModule} from "./article/article.module";
import {ConfigModule} from "@nestjs/config";
import {Sequelize_configService} from "./config/sequelize_config.service";
import {databaseConfig} from "./config/configuration";
import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {RoleModule} from "./role/role.module";
import {CategoryModule} from "./category/category.module";
import {UserModule} from "./user/user.module";
import {CommentModule} from "./comment/comment.module";

@Module({
  imports: [SequelizeModule.forRootAsync({
              imports: [ConfigModule],
              useClass: Sequelize_configService}),
            ConfigModule.forRoot({load:[databaseConfig]}),
            ArticleModule, RoleModule, CategoryModule, UserModule, CommentModule]
})
export class AppModule {}
