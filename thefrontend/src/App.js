import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import { orderListReducer } from './reducers/orderReducers';
import OrderListScreen from './screens/OrderListScreen';


function App() {
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector((state)=>state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();
    const signinoutHandler =() =>{
        dispatch(signout());
    }
    return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="nav">
        <div>
        <Link to="/">   

        <img  className="logo"  src="/images/logofinal.png" ></img></Link>  
        </div>
        <div>
            <ul>
                <li > </li>
                
                <div className="navLi">
                        <Link to='#'> About us </Link>
                    </div>
                    <div className="navLi">
                        <Link to='#'> Restaurants </Link>
                    </div>
               
            {
                
                userInfo?(
                                        //to display the name on header
                    
                                        
                    <div className="dropdown">
                    <div className="navLi">
                        <Link to='#'>{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                    </div>
                    <ul className="dropdown-content">
                    <div className="navLi">
                         <Link to="/cart"> Basket
                         {cartItems.length >0 && (<span className="badge"> {cartItems.length} </span>)}
                        </Link>
                    </div>
                    <div className="navLi">
                         <Link to="/userprofile">User Profile</Link>
                     </div>
                    <div className="navLi">
                        <Link to="#signout" onClick={signinoutHandler}> Sign out </Link>
                   </div>
            
                </ul>
                    </div>
                    ):
                    (<div>
                        <div className="navLi">

                                    <Link to="/signin"> Sign in </Link>
                                    </div>
                                    <div className="navLi">
                                    
                                </div></div>

                    ) 
                
            }

            {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                <div className="navLi">
                    <Link to= "#admin">
                        Seller Side <i className="fa fa-caret-down"></i> 
                </Link>
                </div>
                <ul className="dropdown-content">
                <div className="navLi">

                    
                    <Link to="/dashboard">Dashboard </Link>
                </div>    
                <div className="navLi">
                    
                    <Link to="/productlist">Product List </Link>
                </div> 
                <div className="navLi">
                    
                    <Link to="/orderlist">Orders </Link>
                </div> 
               
                 </ul>
                </div>
            )}
                
        </ul>
        </div>
        
    </header>

    <main>
        <Route path="/cart/:id?" component={CartScreen} ></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route path="/userprofile" component={UserProfileScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={ConfirmationScreen}></Route>
        <Route path="/ThankYouScreen" component={ThankYouScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/productlist" component={ProductListScreen} ></Route>
        <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
        <Route path="/orderlist" component={OrderListScreen}></Route>
    </main>

    <footer className="row center">
        all right reserved
    </footer>
</div>
</BrowserRouter>
  )}
export default App;
