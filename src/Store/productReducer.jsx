const defaultState = {
   products: [
      {
         name: 'Молоко',
         price: 100,
         create_of_date: '25-01-1024',
         origin: 'Кыргызстан'
      },
      {
         name: 'Хлеб',
         price: 40,
         create_of_date: '30-01-1024',
         origin: 'Кыргызстан'
      }
   ]
}

export const productReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'ADD_PRODUCT':
         return { ...state, products: [...state.products, action.payload] }
      default:
         return state
   }
}
