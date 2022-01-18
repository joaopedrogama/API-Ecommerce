import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class GetClientService {
  public async execute(id: number): Promise<Client> {
    const clientRepository = new ClientRepository();

    const client = await clientRepository.findById(id);

    return client;
  }
}
