import AppError from 'shared/errors/AppError';
import Pedido from '../infra/typeorm/entities/Pedido';
import PedidoRepository from '../infra/typeorm/repositories/PedidoRepository';

export default class FindClientOrderService {
    public async execute(id: number): Promise<Pedido[] | AppError> {
        const repository = new PedidoRepository();

        const pedidos = await repository.clientOrders(id);

        return pedidos;
    }
}
