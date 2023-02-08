import { UserRepository } from "../../../Repositories/implementations/UserRepository";
import { IUserRepository } from "../../../Repositories/interfaces/IUserRepository";

export class GetUserUseCase {
    constructor(private repository:IUserRepository){}
    
    async execute(id:string){
        let result = await this.repository.get(id)
        return result
    }
}