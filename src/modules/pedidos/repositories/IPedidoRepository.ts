import IPedidoDTO from '../dtos/IPedidoDTO';
import Pedido from '../infra/typeorm/entities/Pedido';

export default interface IPedidoRepository {
  doOrder(data: IPedidoDTO): Promise<Pedido>;

  clientOrders(clientId: number): Promise<Pedido[]>;

  findOne(): Promise<Pedido>;
}
