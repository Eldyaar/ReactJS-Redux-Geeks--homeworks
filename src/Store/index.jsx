import { legacy_createStore as createStore, combineReducers } from 'redux'

import { productReducer } from "./productReducer"
import { basketReducer } from './basketReducer'
import themeReducer from "./themeReducer"


const rootReducer = combineReducers({
   product: productReducer,
   theme: themeReducer,
   basket: basketReducer
})

export const store = createStore(rootReducer)