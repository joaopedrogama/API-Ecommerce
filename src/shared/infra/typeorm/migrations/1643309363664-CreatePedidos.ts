import {
  Column,
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

export class CreatePedidos1643309363664 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'pedidos',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'cliente_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'data',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'forma_pagamento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'valor',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'desconto',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'pedidos',
      new TableForeignKey({
        columnNames: ['cliente_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clientes',
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedidos');
  }
}
