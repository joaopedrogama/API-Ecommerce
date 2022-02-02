import AppError from '../../../shared/errors/AppError';
import IPedidoDTO from '../dtos/IPedidoDTO';
import Pedido from '../infra/typeorm/entities/Pedido';
import PedidoRepository from '../infra/typeorm/repositories/PedidoRepository';

export default class CreateOrderService {
  public async execute(data: IPedidoDTO): Promise<Pedido | AppError> {
    const pedidoRepository = new PedidoRepository();

    for (let i = 0; i < data.produtos.length; i++) {
      if (!data.produtos[i].quantidade || data.produtos[i].quantidade == 0) {
        return new AppError(
          'Deve ser informado a quantidade do produto para prosseguir com a compra'
        );
      }
    }

    if (data.produtos.length == 0) {
      return new AppError(
        'Necessário no minimo um produto para realizar a compra'
      );
    }

    if ((await pedidoRepository.verificaEstoque(data)) == false) {
      return new AppError('Produto em falta no estoque');
    }

    return await pedidoRepository.doOrder(data);
  }
}