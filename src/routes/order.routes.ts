import { Router } from "express";
import {
  createOrder,
  getOrders,
  getOrdersByUserId,
} from "../controllers/order.controller";
const orderRouter = Router();

orderRouter.post("/orders", (req, res) => createOrder(req, res));
orderRouter.get("/orders", (req, res) => getOrders(req, res));
orderRouter.get("/orders/:userId", (req, res) => getOrdersByUserId(req, res));

export default orderRouter;
