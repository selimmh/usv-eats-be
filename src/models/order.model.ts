import mongoose, { Document } from "mongoose";
import * as yup from "yup";

export const orderSchemaYup = yup.object({
  userId: yup.string().required(),
  total: yup.number().required(),
  items: yup.array(
    yup.object({
      _id: yup.string().required(),
      quantity: yup.number().required(),
    })
  ),
  details: yup.string().notRequired(),
  status: yup.string().oneOf(["pending", "completed", "cancelled"]).required(),
  paymentMethod: yup.string().oneOf(["cash", "card"]).required(),
  type: yup.string().oneOf(["restaurant", "pickup"]).required(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

export type TOrderStatus = "pending" | "completed" | "cancelled";
export type TOrderPaymentMethod = "cash" | "card";
export type TOrderType = "restaurant" | "pickup";
export type TOrderItem = {
  _id: string;
  quantity: number;
};

export interface IOrder extends Document {
  userId: string;
  total: number;
  items: TOrderItem[];
  details?: string;
  status: TOrderStatus;
  paymentMethod: TOrderPaymentMethod;
  type: TOrderType;
  createdAt: Date;
  updatedAt?: Date;
}

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  total: { type: Number, required: true },
  items: { type: Array, required: true },
  details: { type: String, required: false },
  status: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  type: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const Order = mongoose.model<IOrder>("order", orderSchema);
