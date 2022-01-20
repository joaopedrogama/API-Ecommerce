import { UpdateResult, DeleteResult } from "typeorm";
import ICategoryDTO from "../dtos/IcategoryDTO";
import Category from "../infra/typeorm/entities/Category";

export default interface IcategoryRepository {
    create(data: ICategoryDTO): Promise<Category>;

    get(): Promise<Category[]>;

    findOne(id: number): Promise<Category>;

    delete(id: number): Promise<DeleteResult>;

    update(data: ICategoryDTO): Promise<UpdateResult>;
}
