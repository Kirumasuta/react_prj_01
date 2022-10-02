import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./model/category.model";
import {where} from "@sequelize/core";

@Injectable()
export class CategoryService{
    constructor(
        @InjectModel(Category)
        private category_model: typeof Category
    ) {}

    async findAll(): Promise<Category[]> {
        return this.category_model.findAll();
    }

    async findOne(id: number): Promise<Category> {
        return this.category_model.findOne({
            where:{
                id
            }
        });
    }

}