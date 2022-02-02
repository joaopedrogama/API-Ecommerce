import { Request, Response } from 'express';
import CreateOrderService from '../../../services/CreateOrderService';

class PedidoController {
  async create(request: Request, response: Response) {
    const createOrder = new CreateOrderService();

    const data = request.body;

    const result = await createOrder.execute(data);

    return response.json(result);
  }
}

export default new PedidoController();
