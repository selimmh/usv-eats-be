import { Request, Response } from "express";
import { Product } from "../models/product.models";

export const getAllProducts = async (_: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
    });
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newName = req.body.name;
    const newDescription = req.body.description;
    const newPrice = req.body.price;
    const newCategory = req.body.category;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name: newName,
        description: newDescription,
        price: newPrice,
        category: newCategory,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.json(deletedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
