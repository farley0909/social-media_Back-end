import { Router } from "express";
import {Request, Response} from "express";

const router = Router();

router.get("/", (request:Request, response:Response) => {
	response.send("First route");
});

export {router};