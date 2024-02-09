const basketState = {
   products: []
}

export const basketReducer = (state = basketState, action) => {
   switch (action.type) {
      case 'SELECT_PRODUCT':
         return { ...state, products: [...state.products, action.payload] }
      default:
         return state
   }
}

export const addProductBasket = payload => ({ type: 'SELECT_PRODUCT', payload })