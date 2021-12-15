import {productListReducer,productDeleteReducer} from '../reducers/productReducers';
import { userSigninReducer } from '../reducers/userReducers';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';
import { PRODUCT_LIST_SUCCESS ,PRODUCT_LIST_FAIL,PRODUCT_DELETE_SUCCESS} from '../constants/productConstants';
import bcrypt from 'bcryptjs';
import { orderListReducer } from '../reducers/orderReducers';
import { ORDER_CREATE_FAIL, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL } from '../constants/orderConstants';

const initialState = {
    products: [],
    loading: true
  };
  const userInitialState={
    users:[
        
    ],
    loading:true
  };

const orderInitialState ={
    loading: true

};
  describe('authenticate reducer', () => {
    it('returns the initial state', () => {
      expect(productListReducer(undefined, {})).toEqual(initialState);
    });
    it('check user login', () => {
        expect(userSigninReducer(userInitialState, {
            type:USER_SIGNIN_SUCCESS,
            payload :{email:"makleanthous@hotmail.com", password:"1234"}
        })).
        toEqual(      
            {"loading": false, 
            "userInfo": {
                "email": "makleanthous@hotmail.com", "password":"1234"}});
      });
    it('check load product failure', () => {
        expect(productListReducer(initialState, {
          type: PRODUCT_LIST_FAIL,
          error: undefined,
        })).toEqual({
          loading:false,
          error:undefined
        });
    });


    it('check load order failure', () => {
        expect(orderListReducer(orderInitialState, {
          type: ORDER_DETAILS_FAIL,
          error: undefined,
        })).toEqual({
          loading:true,
          error:undefined
        });
    });
    
    it('get initial product', () => {
        expect(productListReducer(initialState, {
          type: PRODUCT_LIST_SUCCESS,
          payload: [
            {
                name:'kebab',
                image:'/images/p1.jpg',
                price:15,
                countInStock:3,
                type: 'beef',
                rating:4,
                numReviews:60,
                description: 'best homemade pork',
    
            }] ,
        })).toEqual({
          loading:false,
          products:[
            {
                name:'kebab',
                image:'/images/p1.jpg',
                price:15,
                countInStock:3,
                type: 'beef',
                rating:4,
                numReviews:60,
                description: 'best homemade pork',
    
            }],
        });
    });
});