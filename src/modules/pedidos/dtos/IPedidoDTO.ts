export default class IPedidoDTO {
    id?: number;
    cliente_id: number;
    data?: Date;
    Status: string;
    produtos: string[];
    forma_pagamento: string;
    valor: number;
    desconto: number;
}