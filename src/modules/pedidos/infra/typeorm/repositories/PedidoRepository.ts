import IPedidoDTO from '../../../dtos/IPedidoDTO';
import IPedidoRepository from '../../../repositories/IPedidoRepository';
import Product from '../../../../products/infra/typeorm/entities/Product';
import {
    AlreadyHasActiveConnectionError,
    getRepository,
    Repository,
} from 'typeorm';
import Pedido from '../entities/Pedido';
import ProductRepository from 'modules/products/infra/typeorm/repositories/ProductRepository';

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
        var valorTotal: number = 0;

        const repositoryProduct = getRepository(Product);

        for (let i = 0; i < data.produtos.length; i++) {
            const produtoCliente = data.produtos[i];

            valorTotal += produtoCliente.preco * produtoCliente.quantidade;

            const produto = await repositoryProduct.findOneOrFail(
                produtoCliente.id
            );

            produto.quantidade = produto.quantidade - produtoCliente.quantidade;

            repositoryProduct.save(produto);
        }

        data.valor = valorTotal - data.desconto;

        const pedido = this.ormReposotory.create(data);

        return await this.ormReposotory.save(pedido);
    }

    async verificaEstoque(): Promise<Product[]> {
        const repositoryProduct = getRepository(Product);

        const products = await repositoryProduct.find();

        return products;
    }
}
