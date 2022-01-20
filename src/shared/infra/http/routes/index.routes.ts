import { Router } from "express";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categoriesRoutes from "../../../../modules/categories/infra/http/routes/categories.routes";

const routes = Router();

routes.use("/clientes", clientsRoutes);

routes.use("/categoria", categoriesRoutes);

export default routes;
