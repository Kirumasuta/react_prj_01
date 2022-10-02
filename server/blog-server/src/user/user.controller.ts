import {Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {ChangeUserDto} from "./dto/change-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get(':id')
    getOneUser(@Param('id') id: number){
        return this.userService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type','Application/json')
    createUser(@Body() createUser: CreateUserDto){
        return this.userService.create(createUser);
    }

    @Patch(':id')
    changeUser(@Body() changeUser: ChangeUserDto, @Param('id') id: number){
        return this.userService.update(id, changeUser);
    }

}