import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Navbar.css'
import logo from './Navbar/logo-dark.png';
function Navbar() {


    return (

        // <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Logo</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="collapsibleNavbar">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-md navbar-light  p-0 ">
            <div className="container-fluid ">
                <h1 className="navbar-brand">
                    <img src={logo} alt="" srcset="" />
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto" id="collapsibleNavbar">
                
                    <ul className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item mx-4">
                            <li className="nav-link ">Home</li>
                        </Link>
                        <Link to="/service" className="nav-item mx-4">
                            <li className="nav-link ">Service</li>
                        </Link>
                        <Link to="/about" className="nav-item mx-4">
                            <li className="nav-link ">About</li>
                        </Link>
                        <Link to="/alumni" className="nav-item mx-4">
                            <li className="nav-link ">Alumni</li>
                        </Link>
                        <Link to="/contact" className="nav-item mx-4">
                            <li className="nav-link ">Contact</li>
                        </Link>
                        <Link to="/login" className="nav-item mx-4">
                            <li className="nav-link ">Login</li>
                        </Link>
                    </ul>
                    
                </div>
            </div>
        </nav>


    )
}


export default Navbar