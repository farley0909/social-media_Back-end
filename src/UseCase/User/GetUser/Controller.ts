import { GetUserUseCase } from "./UseCase";
import { Request, Response } from "express";
import { ResponseImplementation } from "../../../util/ResponseImplementation";
export class GetUserController {
    constructor(private useCase:GetUserUseCase){}

    async handle(request:Request, response:Response){
        let result = await this.useCase.execute(request.params.id)
        if(await result.has_error){
            return response.json(new ResponseImplementation("Houve um erro ao buscar os dados do usuário", true))
        }else{
            return response.json(result)
        }
    }
}