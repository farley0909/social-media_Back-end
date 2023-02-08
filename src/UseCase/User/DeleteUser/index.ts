import { UserRepository } from "../../../Repositories/implementations/UserRepository";
import { DeleteUserController } from "./Controller";
import { DeleteUserUseCase } from "./useCase";

let repository = new UserRepository()
let deleteUserUseCase = new DeleteUserUseCase(repository)
let deleteUserController = new DeleteUserController(deleteUserUseCase)

export {deleteUserController, deleteUserUseCase}