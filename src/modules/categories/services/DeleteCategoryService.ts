import { DeleteResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class DeleteCategoryService {
    public async execute(id: number): Promise<DeleteResult>{

        const categoryRepository = new CategoryRepository();

        return categoryRepository.delete(id);

    };
}
