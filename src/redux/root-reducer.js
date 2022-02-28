import { combineReducers } from "redux";
import CartReducer from "./cart/cart.reducer";

import userReducer from "./user/user.reducer";

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DirectoryReducer from "./directory/directory.reducer";
import ShopReducer from "./shop/shop.reducer";

const rootreducer = combineReducers({
   user: userReducer,
   cart: CartReducer,
   directory: DirectoryReducer,
   shop:ShopReducer 
});

const persistConfig ={
   key: 'root',
   storage,
   whitelist: ['cart']
};

export default persistReducer(persistConfig, rootreducer);

