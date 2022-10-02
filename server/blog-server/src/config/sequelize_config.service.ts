import {SequelizeModuleOptions, SequelizeOptionsFactory} from "@nestjs/sequelize";
import {ConfigService} from "@nestjs/config";
import {EnumConfig} from "./enumConfig/enumConfig";
import {Article} from "../article/model/article.model";
import {Injectable} from "@nestjs/common";

@Injectable()
export class Sequelize_configService implements SequelizeOptionsFactory{
    constructor(private readonly configService: ConfigService) {}

    createSequelizeOptions(): SequelizeModuleOptions {
        const {
            pg:{ dialect, logging, host, port, username, password, database },

        } = this.configService.get(EnumConfig.DATABASE);

        return{ dialect, logging, host, port, username, password, database,
                models:[Article],
                autoLoadModels: true,
                synchronize: true}
    }
}