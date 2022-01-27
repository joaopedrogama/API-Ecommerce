import Client from '../../../../clients/infra/typeorm/entities/Client';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pedidos')
export default class Pedido {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cliente_id: number;

  @ManyToOne(() => Client, (client) => client.pedidos)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Client;

  @Column()
  data: Date;

  @Column()
  status: string;

  @Column()
  forma_pagamento: number;

  @Column()
  valor: number;

  @Column()
  deconto: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
