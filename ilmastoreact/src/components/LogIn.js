import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";


export default function Login(props){

    const [uname, setuname] = useState("");
    const [pw, setpw] = useState("");
    const navigate = useNavigate();
    
  
    const newLogin = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('uname', uname);
            formData.append('pw', pw);

        try {
            const result = await axios.post('/api/login', formData)
            console.log('logging in')                          
            console.log(result);
            const receivedJWT = (result.data);
            props.login(receivedJWT);

            navigate('/profile', {replace: true});
        } catch (error) {
            console.error(error);
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
                <button type="submit" class="btn btn-primary">Login</button>
            </form>

        </body>

    )
}