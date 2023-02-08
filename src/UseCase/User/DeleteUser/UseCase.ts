import { IUserRepository } from "../../../Repositories/interfaces/IUserRepository";

export class DeleteUserUseCase{
    constructor(private repository:IUserRepository){}
    async execute(id:string){
       let result = await this.repository.delete(id)
       return result
    }
}