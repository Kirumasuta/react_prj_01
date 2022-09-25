import {ArticleModule} from "./article/article.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {Sequelize_configService} from "./config/sequelize_config.service";
import {databaseConfig} from "./config/configuration";
import {Module} from "@nestjs/common";

@Module({
  imports: [SequelizeModule.forRootAsync({
              imports: [ConfigModule],
              useClass: Sequelize_configService}),
            ConfigModule.forRoot({load:[databaseConfig]}),
            ArticleModule]
})
export class AppModule {}
