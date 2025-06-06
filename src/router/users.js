//archivo para manejar las rutas de usuarios
import { Router } from "express";
import { createUsers } from "../controller/users";

//objeto para manejo de url
const routerUsers = Router();

/**
 * @swagger
 * /user/:
 *  post:
 *      sumary: crar un usuario
 */
routerUsers.post("/", createUsers);

export default routerUsers;
