import React from 'react';
import {NavLink} from 'react-router-dom';
import './assets_files/css/style.css';
import './assets_files/vendors/mdi/css/materialdesignicons.min.css';
 import './assets_files/vendors/aos/dist/aos.css/aos.css';
import './custom.css';

function Header() {

    return <>
   
   <header id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="navbar-top">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="navbar-top-left-menu">
                    <li className="nav-item">
                      <a href="pages/index-inner.html" className="nav-link">Advertise</a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/aboutus.html" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Events</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Write for Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">In the Press</a>
                    </li>
                  </ul>
                  <ul className="navbar-top-right-menu">
                    <li className="nav-item">
                      <a href="/search" className="nav-link"><i className="mdi mdi-magnify"></i></a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Sign in</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a className="navbar-brand" href="/"
                      ><img src="assets/images/logo.svg" alt=""
                    /></a>
                  </div>
                  <div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="navbar-collapse justify-content-center collapse"
                      id="navbarSupportedContent"
                    >
                      <ul
                        className="navbar-nav d-lg-flex justify-content-between align-items-center"
                      >
                        <li>
                          <button className="navbar-close">
                            <i className="mdi mdi-close"></i>
                          </button>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active_link" className="nav-link">Home</NavLink>
                        
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/magazine" activeClassName="active_link" className="nav-link">MAGAZINE</NavLink>
                          
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/business" activeClassName="active_link" className="nav-link">Business</NavLink>
                          
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/sports.html">Sports</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/art.html">Art</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/politics.html">POLITICS</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/travel.html">Travel</a>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/user" activeClassName="active_link" className="nav-link">User</NavLink>
                        </li>
                       
                        <li className="nav-item">
                          <a className="nav-link" href="pages/contactus.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="#">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
  
   </> 
}
export default Header;