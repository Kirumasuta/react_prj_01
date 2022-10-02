import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./model/user.model";
import {ChangeUserDto} from "./dto/change-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService{
    constructor(
        @InjectModel(User)
        private user_model: typeof User
    ) {}

    async findAll(): Promise<User[]> {
        return this.user_model.findAll();
    }

    async findOne(id: number): Promise<User> {
        return this.user_model.findOne({
            where: {
                id
            }
        });
    }

    create(createUser: CreateUserDto): Promise<User> {
        const user = new User();

        user.name = createUser.name;
        user.login = createUser.login;
        user.password = createUser.password;
        user.role_id = createUser.role_id;

        return user.save();
    }

    update(id: number, changeUser: ChangeUserDto): Promise<[affectedCount: number,
        affectedRows: User[]]>{
        return this.user_model.update(
            {...changeUser},
            {where:{
                    id
                },returning: true}
        )
    }

    async remove(id: number): Promise<void>{
        const user = await this.findOne(id);
        await user.destroy();
    }
}