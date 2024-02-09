import products from '../data/products.json'

const defaultState = {
   products: products
}

export const productReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'ADD_PRODUCT':
         return { ...state, products: [...state.products, action.payload] }
      default:
         return state
   }
}

export const addSomeProduct = payload => ({ type: 'ADD_PRODUCT', payload})