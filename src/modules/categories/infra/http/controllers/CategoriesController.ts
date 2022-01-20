import { Request, Response } from "express";
import GetCategoryService from "../../../../categories/services/GetCategoryService";
import CreateCategoryService from "../../../../categories/services/CreateCategoryService";

class CategoriesController {
    async create(request: Request, response: Response) {
        const category = request.body;

        const createCategoryService = new CreateCategoryService();

        const result = await createCategoryService.execute(category);

        return response.json(result);
    }

    async get(request: Request, response: Response) {
        const getCategory = new GetCategoryService();

        const categories = await getCategory.execute();

        return response.json(categories);
    }
}

export default new CategoriesController();
