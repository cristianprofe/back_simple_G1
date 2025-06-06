import { Router } from "express";
import { createMaterias } from "../controller/materias";
import { middleware } from "../security/auth";

const materiasRouter = Router();

/**
 * @swagger
 * /user/:
 *  post:
 *      sumary: crar un usuario
 */
materiasRouter.post("/", middleware, createMaterias);
//validad que sea profesor
