import { Router } from "express";
import {Request, Response} from "express";
import { addUserControler } from "./UseCase/User/AddUser";
import { deleteUserController } from "./UseCase/User/DeleteUser";
import { getUserController } from "./UseCase/User/GetUser";

const router = Router();

router.get("/", (request:Request, response:Response) => {
	response.send("/");
});

//user routes 
router.get("/api/user/:id", async (request, response)=>{
	return await getUserController.handle(request, response)
})
router.post("/api/user/", async (request, response)=>{
	return await addUserControler.handle(request, response)
})
router.delete("/api/user/:id", async (request, response)=>{
	return await deleteUserController.handle(request, response)
})

export {router};