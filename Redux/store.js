import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import cartItems from './Reducer/cartItem'
import latihanRedux from './Reducer/latihanRedux'

const reducers = combineReducers({
    cartItems: cartItems,
    latihanReduxs: latihanRedux

})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store