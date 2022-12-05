import  React, { useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Navbar(props){

  const [privateData, setprivateData] = useState([]);

  try {


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
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Climate</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/N1">Temperature and Co<sub>2</sub> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/N2">Co<sub>2</sub> emissions</Link>
        </li>
        
      </ul>
      <div classname="Login">
        
        {props.userLoggedIn ? <Link classname="nav-link" to="/Profile">Profile</Link> : <Link classname="nav-link" to="/LogIn">Sign in</Link> }
        
      </div>
    </div>
    <div>
    </div>
  </div>
</nav>

  );
}