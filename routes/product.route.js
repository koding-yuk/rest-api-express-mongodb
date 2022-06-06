import express from "express";
import ProductController from "../controllers/product.controller";

const productRouter = express.Router();

productRouter
  .route("/products")
  .get(ProductController.getAllProducts)
  .post(ProductController.createProduct);

productRouter
  .route("/products/:id")
  .get(ProductController.getOneProduct)
  .patch(ProductController.updateOneProduct)
  .delete(ProductController.deleteOneProduct);

export default productRouter;
