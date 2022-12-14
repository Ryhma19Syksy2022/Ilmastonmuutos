import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import { UserAuthContext } from './Contexts';


export default function Login(props){

    const UserAuthContextValue = useContext(UserAuthContext);

    const [uname, setuname] = useState("");
    const [pw, setpw] = useState("");
    const [loginState, setloginState] = useState("idle");

    const navigate = useNavigate();
    

    let logininterface = null;
    switch(loginState){
        case "idle":
            logininterface = <button type="submit">Login to Account</button>
            break;

        case "processing":
            logininterface = <span>Just a Second...</span>
            break;

        case "registerSuccess":
            logininterface = <span>Login Successfull</span>
            break;

        case "registerFailure":
            logininterface = <span>Login Failed</span>
            break;
    }
  
    const newLogin = async (e) =>{

        e.preventDefault();
        setloginState("processing");

        const formData = new FormData();
            formData.append('uname', uname);
            formData.append('pw', pw);

        try {
            const result = await axios.post('/api/login', formData)
            console.log('logging in')
            setloginState("loginSuccess");
            setTimeout(() => {
                setloginState("idle");
                UserAuthContextValue.login(result.data);
                navigate('/', {replace: true});
            }, 2000);
        } catch (error) {
            console.error(error);
            setloginState("loginFailure");
            setTimeout(() =>  setloginState("idle"), 2000);
        }

        
    }

    return(
        
        <body>
            <h3>LogIn To website</h3>



            <form onSubmit={newLogin} class="was-validated">
                <div class="mb-3 mt-3">
                    <label for="username" class="form-label">Username:</label>
                    <input type="username" class="form-control" id="username" placeholder="Enter username" name="username" value={uname} onChange={(e) => setuname(e.target.value)} required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={pw} onChange={(e) => setpw(e.target.value)} required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-check mb-3">
                    <Link classname="nav-link" to="/Register">a New User?</Link>
                </div>
                {logininterface}
            </form>

        </body>

    )
}