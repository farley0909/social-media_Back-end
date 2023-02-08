import { DeleteUserUseCase } from "./useCase";
import { Request, Response } from "express";
import { ResponseImplementation } from "../../../util/ResponseImplementation";
export class DeleteUserController {
    constructor(private useCase:DeleteUserUseCase){}

    async handle(request:Request, response:Response){
        let result = await this.useCase.execute(request.body)
        if(result.has_error){
            return response.json(new ResponseImplementation("Houve um erro ao remover o usuário", true))
        }else{
            return response.json(new ResponseImplementation("Usuário removido!", false))
        }
    }
}