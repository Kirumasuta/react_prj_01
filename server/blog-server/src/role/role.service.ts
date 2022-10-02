import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./model/role.model";

@Injectable()
export class RoleService{
    constructor(
        @InjectModel(Role)
        private role_model: typeof Role
    ) {}

    async findAll(): Promise<Role[]> {
        return this.role_model.findAll();
    }
}