import  React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from './Contexts';

export default function Profile() {

    const UserAuthContextValue = useContext(UserAuthContext);

    const [uname, setuname] = useState("");
    const [uservisuals, setuservisuals] = useState([]);

    const navigate = useNavigate();
    

    // haetaan käyttäjänimi palvelimelta ja tallennetaan se yllä alustettuihin konstantteihin. 
    // käyttäjänimi tulostetaan profiiliin ja sitä käytetään kutsuihin.


    useEffect(() => {
        async function loadPrivate() {
                const config = {
                    headers:{'Authorization': `Bearer ` + UserAuthContextValue.key},withCredentials: true}
              
                const privateres = await axios.get('/api/private', config);
                    console.log('Getting username');
                    console.log(privateres);
                    setuname(privateres.data);
        };
        loadPrivate();
      }, []);

      // haetaan tallennetut koosteet arrayna käyttäjänimen perusteella palvelimelta, kun painetaan nappia.
      // koosteiden tunnistekenttä visual_id tulostetaan läjään linkkeinä, jotka johtavat eri koosteisiin, ei toimi verkossa hostattuna.

    const loadVisual = async () =>{
        const visualres = await axios.get("/api/uservisuals", {params: {owner: uname}});
            console.log('Getting saved visuals');
            console.log(visualres);
            setuservisuals(visualres.data);
            
    }

    // tilin poiston funktio. Kun salasanakenttään syötetään salasana, voidaan käyttäjätunnus poistaa.
    // huom! ei poista koosteita. tulis clutteria oikeessa käytössä.

    const [pw, setpw] = useState("");        
      
    const deactivateAcc = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('uname', uname);
            formData.append('pw', pw);
    
        try {
            const deactres = await axios.post('/api/deactivate', formData);
            console.log('Deactivating account');
            console.log(deactres);
                
            UserAuthContextValue.logout();
            console.log('Account deactivated');
            navigate('/', {replace: true});
        } catch (error) {
            console.error(error);
        }
    }

    // uloskirjautumisen funktio siirtää käyttäjän homeeseen ja laittaa kutsun appiin poistamaan lokaalista tokenin

    const logOutUser = async (e) =>{
        e.preventDefault();
        console.log('Logging out user');
        UserAuthContextValue.logout();
        navigate('/', {replace: true});

    }
         
    
    return(
    <div>
        <div>
            <span>Logged in as: {uname}</span>
        </div>
        
        <div>
            <button onClick={loadVisual}>Show Saved Visuals</button>
            <table>
                    <tbody>
                        {uservisuals.map(t =>
                            <tr>
                                <td><a href={`/CustomVisuals/${t.visual_id}`}>{t.visual_id}</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            <Link classname="nav-link" to="/Editor">Create new Visualization</Link>
        </div>
        <div>
            <button onClick={logOutUser}>Logout</button>
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
            <button type="submit" class="btn btn-primary">Deactivate Account</button>
        </form>
    </div>
    );
}