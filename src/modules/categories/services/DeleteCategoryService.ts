import { DeleteResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import AppError from "../../../shared/errors/AppError";

export default class DeleteCategoryService {
    public async execute(id: number): Promise<DeleteResult | AppError>{

        if (!id) {
            return new AppError('Necessário ID para deletar a categoria');
        }

        const categoryRepository = new CategoryRepository();

        return categoryRepository.delete(id);

    };
}
