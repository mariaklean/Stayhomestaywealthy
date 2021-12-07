import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailsReducer, orderListReducer } from './reducers/orderReducers';
import {
  
  productCreateReducer,
  productDetailsReducer,
  productListReducer,
  productDeleteReducer,
  productUpdateReducer,

} from './reducers/productReducers';
import { userDetailsReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
userSignin:{
  userInfo: localStorage.getItem('userInfo')? 
  JSON.parse(localStorage.getItem('userInfo')):null,
},

  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
      shippingAddress: localStorage.getItem('ShippingAddress')
      ? JSON.parse(localStorage.getItem('ShippingAddress'))
      :{},
      paymentMethod: 'PayPal',
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  userDetails: userDetailsReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  orderList:orderListReducer, 
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;