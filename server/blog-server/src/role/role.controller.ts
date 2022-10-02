import {Controller, Get, Header} from "@nestjs/common";
import {RoleService} from "./role.service";

@Controller('role')
export class RoleController {
    constructor(
        private readonly roleService: RoleService
    ) {}

    @Get()
    @Header('Content-Type','Application/json')
    getAllRoles(){
        return this.roleService.findAll();
    }
}