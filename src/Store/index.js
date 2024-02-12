import { configureStore } from "@reduxjs/toolkit";

import { basketReducer } from "./basketSlice";
import { productReducer } from "./productSlice";

export const store = configureStore({
   reducer: {
      basket: basketReducer,
      product: productReducer
   }
})