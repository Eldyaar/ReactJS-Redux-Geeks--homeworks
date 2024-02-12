import { createSlice } from "@reduxjs/toolkit";

import productData from '../data/products.json'


const productSlice = createSlice({
   name: 'product',
   initialState: {
      productState: productData
   },
   reducers: {
   },
   
})

export const productReducer = productSlice.reducer
export const productActions = productSlice.actions