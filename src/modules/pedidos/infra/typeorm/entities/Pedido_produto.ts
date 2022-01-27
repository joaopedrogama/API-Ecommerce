import { Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import Product from '../../../../products/infra/typeorm/entities/Product';
import Pedido from './Pedido';

@Entity('pedido_produto')
export default class Pedido_Produto {
  @PrimaryColumn({ type: 'int' })
  produto_id: number;

  @PrimaryColumn({ type: 'int' })
  pedido_id: number;

  @OneToOne(() => Pedido)
  @JoinTable()
  pedido: Pedido;

  @OneToOne(() => Product)
  @JoinTable()
  produto: Product;
}
