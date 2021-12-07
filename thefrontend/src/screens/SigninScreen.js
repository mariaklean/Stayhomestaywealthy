import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function SigninScreen(props){

    const[email, setEmail] = useState("");
    const[password, setPassword]= useState("");

    //for the redirection 
    const redirect= props.location.search? props.location.search.split('=')[1]: '/';
    const userSignin = useSelector((state)=>state.userSignin);
    const {userInfo, loading, error} = userSignin; 
    const dispatch= useDispatch();

    const submitHandler=(e) =>{
        e.preventDefault(); //dont refresh if click the button siginin
        dispatch(signin(email,password));
        
    };

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[userInfo]);
        return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> Login </h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error} </MessageBox>}

                <div>

                    <label className="txtForm" htmlFor="email"> Email address</label>
                    <br/>                   
                    <input className="textfield" type="email" id="email" placeholder="Enter email" required onChange={e=> setEmail(e.target.value)}>
                    
                    </input>
                    <br/>
                    <br/>

                </div>

                <div>

                    <label className="txtForm" htmlFor="password"> Password</label>
                    <br/>                   

                    <input className="textfield" type="password" id="password" placeholder="Enter password" required onChange={e=> setPassword(e.target.value)}>
                    </input>

                
</div>
        <div>
            <br/>
            <label/> 
                <button className="buttonForms" type="submit">Sign in </button>
            <label/>

        </div>
        <div>
            <div className="textFormBelow">
                <br/>
                <br/>
                Don't have an account? {""} 
                
                <Link to={`register?redirect=${redirect}`}> Create account </Link>   
             </div>
        </div>

            </form>
        </div>
    )
}
