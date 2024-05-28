import { createBrowserRouter } from "react-router-dom";
import { action as deleteProductAction } from "./components/ProductDetails";
import { Layout } from "./layouts/Layout";
import EditProduct, {
  action as editProductAction,
  loader as editProductLoader,
} from "./views/EditProduct";
import { NewProduct, action as newProductAction } from "./views/NewProduct";
import {
  Products,
  loader as productsLoader,
  action as updateAvailabilityAction,
} from "./views/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction,
      },
      {
        path: "/products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "/products/:id/edit",
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
      {
        path: "/products/:id/delete",
        action: deleteProductAction,
      },
    ],
  },
]);
