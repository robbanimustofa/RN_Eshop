import { configureStore, combineReducer, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import cartItems from './Reducer/cartItem'

const reducer = combineReducer({
    cartItems: cartItems
})

const store = configureStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store