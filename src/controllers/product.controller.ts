import { Request, Response } from "express";
import * as productService from "../services/product.service";

export const getAllProducts = async (_: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
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
    const product = await productService.createProduct(req.body);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const updatedProduct = await productService.updateProductById(
      id,
      updateData
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
    const deletedProduct = await productService.deleteProductById(id);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.json(deletedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
