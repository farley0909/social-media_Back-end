import { AddUserDTO } from "../../UseCase/User/AddUser/AddUserDTO";
import { ResponseImplementation } from "../../util/ResponseImplementation";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository{
    save(AddUserDTO: AddUserDTO): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    get(): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    
}