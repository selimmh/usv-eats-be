import mongoose, { Document } from "mongoose";
import * as yup from "yup";

export const productSchemaYup = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  category: yup
    .array()
    .of(
      yup
        .string()
        .oneOf(["all", "pizza", "burger", "drinks", "desserts", "sides"])
    )
    .required(),

  images: yup.array(yup.string()).required(),
});

type TCategories = "all" | "pizza" | "burger" | "drinks" | "desserts" | "sides";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: TCategories[];
  images: string[];
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: [String], required: true },
  images: { type: [String], required: true },
});

export const Product = mongoose.model<IProduct>("product", productSchema);
