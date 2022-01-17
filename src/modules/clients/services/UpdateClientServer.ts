import { UpdateResult } from "typeorm";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";


export default class UpdateClientsService {
  public async execute(data: IClientDTO, id:number): Promise<UpdateResult> {
    const clientRepository = new ClientRepository();

    const client = await clientRepository.update(data, id);

    return client;
  }
}
