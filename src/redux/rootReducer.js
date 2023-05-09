import { combineReducers } from "redux";

import counterReducer from "~/redux/counter/counter.reducer";
import cartReducer from '~/redux/cart/cart.reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  shopping_cart: cartReducer
});


export default rootReducer;
