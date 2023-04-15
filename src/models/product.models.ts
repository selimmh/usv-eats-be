import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category?: string;
  images?: string[];
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
  images: { type: [String], required: true },
});

export const Product = mongoose.model<IProduct>("product", productSchema);
