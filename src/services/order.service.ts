import { Order, IOrder } from "../models/order.model";

export const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  const order = new Order({
    userId: orderData.userId,
    total: orderData.total,
    items: orderData.items,
    details: orderData.details,
    status: orderData.status,
    paymentMethod: orderData.paymentMethod,
    type: orderData.type,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const savedOrder = await order.save();
  return savedOrder;
};

export const getOrders = async (): Promise<IOrder[]> => {
  const orders = await Order.find();
  return orders;
};

export const getOrdersByUserId = async (userId: string): Promise<IOrder[]> => {
  const orders = await Order.find({ userId });
  return orders;
};
