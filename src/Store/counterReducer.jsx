const defaultState = {
   counter: 100
}
 
export const counterReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return { ...state, counter: state.counter + Number(action.payload) }
      case 'DECREMENT':
         return { ...state, counter: state.counter - Number(action.payload) }
      default:
         return state
   }
}