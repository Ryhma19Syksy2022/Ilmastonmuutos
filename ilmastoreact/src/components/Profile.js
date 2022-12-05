import  React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
    const navigate = useNavigate();

    const [privateData, setprivateData] = useState([]);

    try {
        const config = {
            headers:{'Authorization': `Bearer ${props.token}`},withCredentials: true}
      
        axios.get('/api/private', config)
             .then((response) => {
                console.log('gettingdata')
                console.log(props.token)
                console.log(response.data)
                setprivateData(response.data);
             });
    
             
    } catch (error) {
        console.error(error);
    }

    

    const logOut = async () =>{
        props.logout();
        console.log('logging out')
        navigate('/Login', {replace: true});
        
        }
         
    
    return(
    <div>
        {privateData}<br/>
        <button onClick={() => logOut()}>log out</button>
    </div>
    );
}