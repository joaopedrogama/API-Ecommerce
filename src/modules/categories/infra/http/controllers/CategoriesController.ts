import { Request, Response } from "express";
import CreateCategoryService from "../../../../categories/services/CreateCategoryService";

class CategoriesController {
    async create(request: Request, response: Response) {
        const category = request.body;

        const createCategoryService = new CreateCategoryService();

        const result = createCategoryService.execute(category);

        return response.json(result);
    }
}

export default new CategoriesController();
