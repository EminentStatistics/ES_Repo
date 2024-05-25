// import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Header2 = () =>{
    return(
        <div className="Header">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"><i className="bi bi-mortarboard"></i></a>
                <div className="logoContent">
                    <p id="p1">EMINENT STATISTICS</p>
                    <p id="p2">for a better Future...</p>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsupportedcontent" aria-controls="navbarsupportedcontent" aria-expanded="false"  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" >Home</NavLink>
                    </li>
                    <li className="nav-item"> 
                        <NavLink to="/about" className="nav-link" >About</NavLink>
                    </li>
                    <li className="nav-item"> 
                        <NavLink to="/contact" className="nav-link" >Contact</NavLink>
                    </li>
                    <li className="nav-item"> 
                        <a className="dropdown-toggle" data-bs-toggle="dropdown">Universities</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item">Central Universities</a></li>
                            <li><a className="dropdown-item">IIT</a></li>
                            <li><a className="dropdown-item">University of Delhi</a></li>
                            <li><a className="dropdown-item">Pune University</a></li>
                        </ul>
                    </li>
                </ul>

            </nav>

        </div>
    );
}