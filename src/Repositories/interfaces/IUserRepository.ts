import { AddUserDTO } from "../../UseCase/User/AddUser/AddUserDTO"
import { ResponseImplementation } from "../../util/ResponseImplementation"

export interface IUserRepository {
        save(AddUserDTO:AddUserDTO):Promise<ResponseImplementation>
        get(id:string):Promise<ResponseImplementation>
        delete(id:string):Promise<ResponseImplementation>
}