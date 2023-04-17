import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const product = await orderService.createOrder(req.body);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getOrders = async (_: Request, res: Response) => {
  try {
    const products = await orderService.getOrders();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const products = await orderService.getOrdersByUserId(userId);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
