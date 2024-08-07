import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./api/apiSlice";
import { cartSlice } from "./cart/cartSlice";
import modalSlice from "./modalSlice/modalSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSlice.reducer, 
        modal: modalSlice,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
}) 

