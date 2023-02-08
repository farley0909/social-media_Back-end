import { AddUserUseCase } from "./AddUserUseCase";
import { Request, Response } from "express";
import { ResponseImplementation } from "../../../util/ResponseImplementation";
export class AddUserConntroller {
    constructor(private useCase:AddUserUseCase){}
    async handle(request:Request, response:Response){
        let result = await this.useCase.execute(request.body)
        if(result.has_error){
            return response.json(new ResponseImplementation('Houve um erro no cadastro de usuário', true))
        }else{
            return response.json(new ResponseImplementation("Usuário criado!", false))
        }
    }

}