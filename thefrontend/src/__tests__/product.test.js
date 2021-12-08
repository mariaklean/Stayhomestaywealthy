import {productListReducer,productDeleteReducer} from '../reducers/productReducers';
import { userSigninReducer } from '../reducers/userReducers';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';
import { PRODUCT_LIST_SUCCESS ,PRODUCT_LIST_FAIL,PRODUCT_DELETE_SUCCESS} from '../constants/productConstants';
import bcrypt from 'bcryptjs';

const initialState = {
    products: [],
    loading: true
  };
  const userInitialState={
    users:[
        
    ],
    loading:true
  };
  describe('authenticate reducer', () => {
    it('returns the initial state', () => {
      expect(productListReducer(undefined, {})).toEqual(initialState);
    });
    it('check user login', () => {
        const password =  bcrypt.hashSync('1234',8)
        expect(userSigninReducer(userInitialState, {
            type:USER_SIGNIN_SUCCESS,
            payload :{email:"makleanthous@hotmail.com", password:password}
        })).
        toEqual(      
            {"loading": false, 
            "userInfo": {
                "email": "makleanthous@hotmail.com", "password": hashSync('1234',8)}});
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