import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./features/products/slice";
import cartReducer from "./features/cart/slice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: cartReducer,
  },
});

export default store;