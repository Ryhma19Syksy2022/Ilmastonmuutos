import  React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from './Contexts';

export default function Profile(props) {

    const UserAuthContextValue = useContext(UserAuthContext);

    const [uname, setuname] = useState("");
    const [uservisuals, setuservisuals] = useState([]);

    const navigate = useNavigate();
    

    useEffect(() => {
        async function loadPrivate() {
                const config = {
                    headers:{'Authorization': `Bearer ` + UserAuthContextValue.key},withCredentials: true}
              
                const privateres = await axios.get('/api/private', config)
                    console.log('getting username')
                    setuname(privateres.data);
        };
        loadPrivate();
      }, []);

    const loadVisual = async () =>{
        const visualres = await axios.get("/api/uservisuals", {params: {owner: uname}});
            console.log(visualres.data);
            console.log('getting saved visuals')
            setuservisuals(visualres.data);
            
    }


    const [pw, setpw] = useState("");        
      
    const deactivateAcc = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('uname', uname);
            formData.append('pw', pw);
    
            
        try {
            const deactres = await axios.post('/api/deactivate', formData);
            console.log('deactivating account')                          
            console.log(deactres.data);
                
            UserAuthContextValue.logout();
            console.log('account deactivated');
            navigate('/', {replace: true});
        } catch (error) {
            console.error(error);
        }

        
    }

    const logOutUser = async (e) =>{
        e.preventDefault();
        UserAuthContextValue.logout();
        navigate('/', {replace: true});

    }
         
    
    return(
    <div>
        {uname}<br/>
        <div>
            <button onClick={loadVisual}>show saved visuals</button>
            <table>
                    <tbody>
                        {uservisuals.map(t =>
                            <tr>
                                <td>{t.visual_id}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            <Link classname="nav-link" to="/Editor">Create new visualization</Link>
        </div>
        <div>
            <button onClick={logOutUser}>log out</button>
            <br/>
        </div>
        
        
        <div>
            
        </div>
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