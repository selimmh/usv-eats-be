import { Product, IProduct } from "../models/product.models";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (id: string): Promise<any | null> => {
  const product = await Product.findById(id);
  return product;
};

export const createProduct = async (
  productData: IProduct
): Promise<IProduct> => {
  const product = new Product({
    name: productData.name,
    description: productData.description,
    price: productData.price,
    category: productData.category,
    images: productData.images,
  });
  const savedProduct = await product.save();
  return savedProduct;
};

export const updateProductById = async (
  id: string,
  productData: IProduct
): Promise<IProduct | null> => {
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      category: productData.category,
      images: productData.images,
    },
    { new: true }
  );
  return updatedProduct;
};

export const deleteProductById = async (id: string): Promise<any | null> => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};
