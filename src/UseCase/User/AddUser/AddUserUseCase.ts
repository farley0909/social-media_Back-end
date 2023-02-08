import { IUserRepository } from "../../../Repositories/interfaces/IUserRepository";
import { ResponseImplementation } from "../../../util/ResponseImplementation";
import { AddUserDTO } from "./AddUserDTO";

export class AddUserUseCase {
    constructor(private repository:IUserRepository){}
    async execute(user:AddUserDTO):Promise<ResponseImplementation> {
       let result = await this.repository.save(user)
       return result
    }

}