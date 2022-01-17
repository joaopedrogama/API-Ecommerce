import { DeleteResult } from "typeorm";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class DeleteClientService {

  public async execute(id: number): Promise<DeleteResult> {
      
    const clientRepository = new ClientRepository();

    const resutl = await clientRepository.deleteClient(id);

    return resutl;

  }
}
