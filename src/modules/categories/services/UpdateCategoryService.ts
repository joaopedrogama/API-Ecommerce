import { UpdateResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDTO";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";


export default class UpdateCategoryService {
    public async execute(data: ICategoryDTO, id:number): Promise<UpdateResult> {

        const categoryRepository = new CategoryRepository();

        const result = categoryRepository.update(data, id);

        return result;

    }
}