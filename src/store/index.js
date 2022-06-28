import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./modules/products/reducer";
import cartProductsReducer from "./modules/cart/reducer";

const reducer = combineReducers({products: productsReducer, cart: cartProductsReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store

