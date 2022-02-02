import { Router } from 'express';
import PedidoController from '../controllers/PedidoController';

const routes = Router();

routes.post('/', PedidoController.create);

export default routes;
