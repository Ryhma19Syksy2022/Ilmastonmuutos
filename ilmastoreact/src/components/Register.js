import React from 'react';
import axios from 'axios';
import { useState } from "react";

export default function Register(){

    const [uname, setuname] = useState("");
    const [pw, setpw] = useState("");
    
  
    const newRegister = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('uname', uname);
            formData.append('pw', pw);

        try {
            const result = await axios.post('/api/register', formData)
            console.log(result);
        } catch (error) {
            console.error(error);
        }

        
    }
        
    

    return(
        <body>
            <h3>Register a new user account To website</h3>

            <form onSubmit={newRegister} class="was-validated">
                <div class="mb-3 mt-3">
                    <label for="username" class="form-label">Username:</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" value={uname} onChange={(e) => setuname(e.target.value)} required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={pw} onChange={(e) => setpw(e.target.value)} required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <button type="submit" class="btn btn-primary">Register Account</button>
            </form>

        </body>

    )
}