import  React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
    const navigate = useNavigate();

    const [uname, setuname] = useState("");

    try {
        const config = {
            headers:{'Authorization': `Bearer ${props.token}`},withCredentials: true}
      
        axios.get('/api/private', config)
             .then((response) => {
                console.log('gettingdata')
                console.log(props.token)
                console.log(response.data)
                setuname(response.data);
             });
    
             
    } catch (error) {
        console.error(error);
    }

    

    const logOut = async () =>{
        props.logout();
        console.log('logging out')
        navigate('/', {replace: true});
        
        }

    const [pw, setpw] = useState("");        
      
    const deactivateAcc = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('uname', uname);
            formData.append('pw', pw);
    
        try {
            const result = await axios.post('/api/deactivate', formData)
            console.log('deactivating account')                          
            console.log(result);
                
            props.logout();
            console.log('account deactivated')
            navigate('/', {replace: true});
        } catch (error) {
            console.error(error);
        }
    }
         
    
    return(
    <div>
        {uname}<br/>
        <button onClick={() => logOut()}>log out</button><br/>
        <form onSubmit={deactivateAcc} class="was-validated">
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={pw} onChange={(e) => setpw(e.target.value)} required/>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <button type="submit" class="btn btn-primary">Deactivate account</button>
        </form>
    </div>
    );
}