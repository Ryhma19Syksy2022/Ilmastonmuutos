import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Register(){

    const [uname, setuname] = useState("");
    const [pw, setpw] = useState("");
    const [registerState, setregisterState] = useState("idle");

    const navigate = useNavigate();
    
  
    const newRegister = async (e) =>{
        e.preventDefault();
        setregisterState("processing");

        const formData = new FormData();
            formData.append('uname', uname);
            formData.append('pw', pw);

        try {
            const result = await axios.post('/api/register', formData);
            console.log(result);
            setregisterState("registerSuccess");
            setTimeout(() => {
                setregisterState("idle");
                navigate('/Login', {replace: true});
            }, 2000);
        } catch (error) {
            console.error(error);
            setregisterState("registerFailure");
            setTimeout(() => setregisterState("idle"), 2000);
        }

        
    }
        
    let registerinterface = null;
    switch(registerState){
        case "idle":
            registerinterface = <button type="submit">Register account</button>
            break;

        case "processing":
            registerinterface = <span>Just a second...</span>
            break;

        case "registerSuccess":
            registerinterface = <span>Register account successful</span>
            break;

        case "registerFailure":
            registerinterface = <span>Failed to register account</span>
            break;
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
                {registerinterface}
            </form>

        </body>

    )
}