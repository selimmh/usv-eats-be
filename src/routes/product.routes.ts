import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/products", (req, res) => getAllProducts(req, res));
productRouter.get("/products/:id", (req, res) => getProductById(req, res));
productRouter.post("/products", (req, res) => createProduct(req, res));
productRouter.put("/products/:id", (req, res) => updateProductById(req, res));
productRouter.delete("/products/:id", (req, res) =>
  deleteProductById(req, res)
);

export default productRouter;
