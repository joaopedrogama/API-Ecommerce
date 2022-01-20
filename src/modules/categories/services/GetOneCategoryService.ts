import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class GetOneCategoryService {
    public async execute(id: number): Promise<Category>{

        const categoryRepository = new CategoryRepository();

        const category = await categoryRepository.findOne(id)

        return category;
    }
}