import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

const routes = Router();

routes.post("/", CategoriesController.create);

routes.get('/', CategoriesController.get);

export default routes;