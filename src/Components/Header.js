import { NavLink, Link } from "react-router-dom";

export const Header = () =>{
    return (
        <div className="Header container-fluid">
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="#"><i className="bi bi-mortarboard"></i></a>
                    {/* <a className="navbar-brand" href="#"><img src="./Images/Logo.jpg"></img></a> */}
                    <div className="logoContent">
                    <p id="p1">EMINENT STATISTICS</p>
                    <p id="p2">for a better Future...</p>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsupportedcontent" aria-controls="navbarsupportedcontent" aria-expanded="false"  aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse " id="navbarsupportedcontent">
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
                            {/* <li className="nav-item ">

                                <div className="dropdown show">
                                <a href="#" className=" dropdown-toggle" id="dropdownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Universities
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownLink">
                                    <a className="dropdown-item" href="#">Central Universities</a>
                                    <a className="dropdown-item" href="#">IIT</a>
                                    <a className="dropdown-item" href="#">Pune University</a>
                                </div>
                                </div>

                                
                            </li> */}
                            <li className="nav-item">
                                <div className="dropdown">
                                        <a href="#" className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Universities
                                </a>
                                    <div className="dropdown-menu">
                                        <div className="dropleft dropdown-item ">
                                            
                                            <a className="dropleft dropdown-toggle" data-bs-toggle="dropdown" href="#">Central Uniersities</a>

                                                <div className=" dropdown-submenu">
                                                    <div className="dropdown-item">
                                                       <Link to="/university/university of hyderabad"> <a href="#">Uniersity of Hyderabad</a></Link>
                                                    </div>
                                                    <div className="dropdown-item">
                                                    <Link to="/university/pondicherry university"><a href="#">Pondicherry Uniersity</a></Link>
                                                    </div>
                                                    <div className="dropdown-item">
                                                    <Link to="/university/Banaras hindu University"><a href="#">Banaras Hindu Uniersity</a></Link>
                                                    </div>
                                                </div>
                                            
                                            

                                        </div>
                                        <div className="dropdown-item">
                                            <Link to="/university/iit"><a href="#">IIT</a></Link>
                                        </div>
                                        <div className="dropdown-item">
                                        <Link to="/university/university of delhi"><a href="#">Uniersity of DELHI </a></Link>
                                        </div>
                                        <div className="dropdown-item">
                                        <Link to="/university/pune university"><a href="#">Pune Uniersity</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item"> 
                                <div className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >MSC Enetrances</a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">
                                            <Link to="/university/andhra university"><a href="#">Andhra University</a></Link>
                                        </div>
                                        <div className="dropdown-item">
                                        <Link to="/university/acharya nagarjuna university"><a href="#">ANU</a></Link>
                                        </div>
                                        <div className="dropdown-item">
                                        <Link to="/university/sri venkateswara university"><a href="#">SVU</a></Link>
                                        </div>
                                        <div className="dropdown-item">
                                        <Link to="/university/usmania university"><a href="#">Usmania University</a></Link>
                                        </div>
                                        <div className="dropdown-item">
                                        <Link to="/university/kakatiya university"><a href="#">Kakatiya University</a></Link>
                                        </div>
                                        <div className="dropdown-item">
                                        <Link to="/university/krishna university"><a href="#">Krishna University</a></Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </li>

                        </ul>
                    </div>

                </nav>
            </div>
    );
}