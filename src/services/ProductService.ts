import axios from "axios";
import { IProduct, IProductResponse } from "../types/product.interface";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    await axios.post(url, {
      name: data.name,
      price: data.price,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios<IProductResponse>(url);
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteProduct(id: IProduct["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.delete(url);
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id: IProduct["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios<IProductResponse>(url);
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateProduct(data: ProductData, id: IProduct["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.put(url, data);
  } catch (error) {
    console.error(error);
  }
}

export async function updateProductAvailability(id: IProduct["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.patch(url);
  } catch (error) {
    console.log(error);
  }
}
