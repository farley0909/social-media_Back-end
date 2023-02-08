import { UserRepository } from "../../../Repositories/implementations/UserRepository";
import { GetUserController } from "./Controller";
import { GetUserUseCase } from "./UseCase";

let repository = new UserRepository()
let getUserCase = new GetUserUseCase(repository)
let getUserController = new GetUserController(getUserCase)

export {getUserCase, getUserController}