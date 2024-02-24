import mongoose from "mongoose";
import { category } from "./category.models";
const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: string,
    },
    name: {
      required: true,
      type: string,
    },
    productImage: {
      type: string,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: category,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    ownership: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Category", productSchema);
