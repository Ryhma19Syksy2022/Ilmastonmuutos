import  React, { useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Navbar(props){

  try {

    const [privateData, setprivateData] = useState([]);

    const config = {
        headers:{'Authorization': `Bearer ${props.token}`},withCredentials: true}
  
    axios.get('/api/private', config)
         .then((response) => {
            console.log(response.data)
            setprivateData(response.data);
         });

         
  } catch (error) {
    console.error(error);
  }

  return(
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div class="container-fluid">
    <Link className="navbar-brand" href="/">Climate</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
   <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
   <Link className="nav-link" to="/v1">V1Annual</Link>
        </li> 
        <li class="nav-item">
   <Link className="nav-link" to="/v2">V2Annual</Link>
        </li>
        
      </ul>
      <form class="Login">
        {props.userLoggedIn ? <Link className="nav-link" to="/profile">profile</Link> : <Link classname="nav-link" to="/LogIn">Sign in</Link> }
      </form>
    </div>
    <div>
    </div>
  </div>
</nav>

  );
}