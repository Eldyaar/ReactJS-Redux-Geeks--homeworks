import { legacy_createStore as createStore, combineReducers } from 'redux'

import { productReducer } from "./productReducer"
import themeReducer from "./themeReducer"


const rootReducer = combineReducers({
   product: productReducer,
   theme: themeReducer
})

export const store = createStore(rootReducer)