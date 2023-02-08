import { UserRepository } from "../../../Repositories/implementations/UserRepository";
import { AddUserConntroller } from "./AddUserController";
import { AddUserUseCase } from "./AddUserUseCase";

let repository = new UserRepository()
let addUserUseCase = new AddUserUseCase(repository) 
let addUserControler = new AddUserConntroller(addUserUseCase)

export {addUserControler, addUserUseCase}