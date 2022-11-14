import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
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
        <li class="nav-item">
   <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      </ul>
      <form class="Login">
        <Link classname="nav-link" to="/LogIn">Sign in</Link>
      </form>
    </div>
    <div>
    </div>
  </div>
</nav>

  );
}