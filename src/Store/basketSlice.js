import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice({
   name: 'basket',
   initialState: {
      totalPrice: 0,
      basketState: []
   },
   reducers: {
      addProduct: (state, action) => {
         const findProduct = state.basketState.find((p) => p.name === action.payload.name)
         
         if (findProduct) {
            findProduct.count++;
         } else {
            state.basketState.push({
               ...action.payload,
               count: 1
            });
         }
      },
      removeProduct: (state, action) => {
         state.basketState = state.basketState.filter((product) => product.name !== action.payload.name)
      }, 
      calculateTotalPrice: (state) => {
         state.totalPrice = state.basketState.reduce((sum, product) => {
            const productPrice = typeof product.price === 'string' ? Number(product.price.substring(1)) : 0
            return productPrice * product.count + sum
         }, 0)
      },
      decreaseCount: (state, action) => {
         const findProduct = state.basketState.find((prod) => prod.name === action.payload.name)
         findProduct.count--
      }
   }
})

export const basketReducer = basketSlice.reducer
export const basketActions = basketSlice.actions
