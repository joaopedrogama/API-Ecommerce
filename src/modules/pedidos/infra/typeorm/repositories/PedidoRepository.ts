import IPedidoDTO from '../../../dtos/IPedidoDTO';
import IPedidoRepository from '../../../repositories/IPedidoRepository';
import Product from '../../../../products/infra/typeorm/entities/Product';
import { getRepository, Repository } from 'typeorm';
import Pedido from '../entities/Pedido';

export default class PedidoRepository implements IPedidoRepository {
    private ormReposotory: Repository<Pedido>;

    constructor() {
        this.ormReposotory = getRepository(Pedido);
    }

    async clientOrders(id: number): Promise<Pedido[]> {
        const pedidos = await this.ormReposotory.find({
            where: {
                cliente_id: id,
            },
        });

        return pedidos;
    }

    async findOne(id: number): Promise<Pedido | undefined> {
        const pedido = await this.ormReposotory.findOne(id, {
            relations: ['produtos'],
        });

        return pedido;
    }

    async doOrder(data: IPedidoDTO): Promise<Pedido> {
        const pedido = this.ormReposotory.create(data);

        return await this.ormReposotory.save(pedido);
    }

    async verificaEstoque(data: IPedidoDTO): Promise<Boolean> {
        const order = data.produtos;

        const repositoryProduct = getRepository(Product);

        const products = await repositoryProduct.find();

        for (let index = 0; index < order.length; index++) {
            const orderProduct = order[index];

            for (let j = 0; j < products.length; j++) {
                const product = products[j];

                if (orderProduct.nome == product.nome) {
                    if (product.quantidade < orderProduct.quantidade) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
