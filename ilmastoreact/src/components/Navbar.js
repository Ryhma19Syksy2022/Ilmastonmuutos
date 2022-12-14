import  React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserAuthContext } from './Contexts';

export default function Navbar(){

  const userAuthContextValue = useContext(UserAuthContext);

  return(
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Climate</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/N1">Temperature and Co<sub>2</sub> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/N2">Co<sub>2</sub> Emissions</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/CustomVisuals"> CustomVisuals</Link>
        </li>
        
        
      </ul>
      <div classname="Login">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            {userAuthContextValue.key !=null ? <Link className="nav-link" to="/Profile">Profile</Link> : <Link className="nav-link" to="/LogIn">Login</Link> }
          </li>
        </ul>  
      </div>
    </div>
    <div>
    </div>
  </div>
</nav>

  );
}

