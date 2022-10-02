import {Controller, Get, Header, Param} from "@nestjs/common";
import {CategoryService} from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    @Get()
    @Header('Content-Type','Application/json')
    getAllCategories(){
        return this.categoryService.findAll();
    }

    @Get(':category_id')
    @Header('Content-Type','Application/json')
    getCategoryById(@Param('category_id') id: number){
        return this.categoryService.findOne(id);
    }
}