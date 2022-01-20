import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

const routes = Router();

routes.post("/", CategoriesController.create);

export default routes;