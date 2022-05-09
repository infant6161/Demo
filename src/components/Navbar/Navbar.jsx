import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
         <>
         
        <nav className=" navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
      <h4 style={{fontSize:"40px"}}>SPACE-X</h4> 
           
     
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/history">History</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/launches">Launches</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/rocket">Rocket</a>
      </li>
    </ul>
    <div className="search">
                <input type="text" name="search" placeholder="Search heare"></input>
                <label for="search"><i className="fas fa-search"></i></label>
            </div>
            <a className="nav-link" href="#">About Us</a> 
  </div>

</nav>

</>
    );
};

export default Navbar;