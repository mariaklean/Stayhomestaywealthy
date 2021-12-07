import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function RegisterScreen(props){
    const[name, setName] = useState("");

    const[email, setEmail] = useState("");
    const[password, setPassword]= useState("");
    const[confirmPassword, setConfirmPassword]= useState("");


    //for the redirection 
    const redirect= props.location.search? props.location.search.split('=')[1]: '/';
    const userRegister = useSelector((state)=>state.userRegister);
    const {userInfo, loading, error} = userRegister; 
    const dispatch= useDispatch();

    const submitHandler=(e) =>{
        e.preventDefault(); //dont refresh if click the button siginin
        if(password !== confirmPassword){
            alert('Try again passwords do not match')
        } else{
            dispatch(register(name, email,password));

        }
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
                    <h1> Signup </h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error} </MessageBox>}


                <div>

                    <label className="txtForm" htmlFor="name"> Name</label>
                    <br/>                   
                    <input className="textfield" type="name" id="name" placeholder="Enter name" required onChange={e=> setName(e.target.value)}>
                    
                    </input>
                    <br/>
                    <br/>

                </div>


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

            <label className="txtForm" htmlFor="confirmPassword">Confirm Password</label>
            <br/>                   

            <input className="textfield" type="password" id="confirmPassword" placeholder="Confirm password" required onChange={e=> setConfirmPassword(e.target.value)}>
            </input>


            </div>
        <div>
            <br/>
            <label/> 
                <button className="buttonForms" type="submit">Sign up </button>
            <label/>

        </div>
        <div>
            <div className="textFormBelow">
                <br/>
                <br/>
                Already have an account? {""} 
                
                <Link to={`/signin?redirect=${redirect}`}> Sign in </Link>   
             </div>
        </div>

            </form>
        </div>
    )
}
