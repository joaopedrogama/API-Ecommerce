import IcategoryDTO from "modules/categories/dtos/IcategoryDTO";
import IcategoryRepository from "modules/categories/repositories/ICategoryRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Category from "../entities/Category";

export default class CategoryRepository implements IcategoryRepository {
    private ormRepository: Repository<Category>;

    constructor() {
        this.ormRepository = getRepository(Category);
    }

    async create(data: IcategoryDTO): Promise<Category> {
        const category = this.ormRepository.create();

        return this.ormRepository.save(category);
    }
    get(): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<DeleteResult> {
        throw new Error("Method not implemented.");
    }
    update(data: IcategoryDTO): Promise<UpdateResult> {
        throw new Error("Method not implemented.");
    }
}
