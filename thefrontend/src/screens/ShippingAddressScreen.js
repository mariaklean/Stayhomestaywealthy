import CheckoutSteps from "../components/CheckoutSteps";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";

export default function ShippingAddressScreen(props){
    const userSignin = useSelector((state)=>state.userSignin);
    const {userInfo} = userSignin;
    if(!userInfo){
        props.history.push('/signin');
    }
    const[fullName, setFullName]=useState('');
    const[address, setAddress]=useState('');
    const[city, setCity]=useState('');
    const[postalCode, setPostalCode]=useState('');
    const[country, setCountry]=useState('');
    const[notes, setNotes]=useState('');

    const dispatch= useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, postalCode,country, notes}));
        props.history.push('/payment');
    };
    return(
        <div>
            <CheckoutSteps step1 step2> </CheckoutSteps>
            <body>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Information</h1>
                </div>
                <div>
                    <label className="txtForm" htmlFor="fullName"> Full Name </label>
                    <input  
                        className="textfield"
                        type="text"
                        id="fullName"
                        value={fullName}
                        placeholder="Enter full name"
                        onChange={(e)=> setFullName(e.target.value)} required></input>
                </div>
                <div>
                    <label className="txtForm" htmlFor="address"> Address </label>
                    <input 
                        className="textfield" 
                        type="text"
                        id="address"
                        value={address}
                        placeholder="Enter Address"
                        onChange={(e)=> setAddress(e.target.value)} required></input>
                </div>
               
                <div>
                    <label className="txtForm" htmlFor="city"> City</label>
                    <input  
                        className="textfield"
                        type="text"
                        id="city"
                        value={city}
                        placeholder="Enter city"
                        onChange={(e)=> setCity(e.target.value)} required></input>
                </div>
                <div>
                    <label className="txtForm" htmlFor="postalCode"> Enter Postal code </label>
                    <input  
                        className="textfield"
                        type="text"
                        id="postalCode"
                        value={postalCode}
                        placeholder="Enter Postal code"
                        onChange={(e)=> setPostalCode(e.target.value)} required></input>
                </div>
                <div>
                    <label className="txtForm" htmlFor="country"> Enter country </label>
                    <input  
                    className="textfield"
                        type="text"
                        id="country"
                        value={country}
                        placeholder="Enter country"
                        onChange={(e)=> setCountry(e.target.value)} required></input>
                </div>

                <div>
                    <label className="txtForm" htmlFor="notes"> Enter notes to Seller </label>
                    <input  
                    className="textfieldBig"
                        type="text"
                        id="notes"
                        value={notes}
                        placeholder="Enter notes"
                        onChange={(e)=> setNotes(e.target.value)} ></input>
                </div>
                <br/>
                <div>
                    <label/>
                    <button className="primary" type="submit">Continue </button>
                </div>


            </form>
            </body>
        </div>

    );
}