import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faThList } from '@fortawesome/free-solid-svg-icons'
import LogoWhite from "../assets/logo-white.png"

export default class Navbar extends Component {

  render() {
    return (
      // <nav className="navbar navbar-dark navbar-expand-lg">
        
      //   <div className="container flexer">
      //   <Link to="/" className="navbar-brand"><img src={LogoWhite} alt="" width="200px"/></Link>
      //     <div className="collpase navbar-collapse">
      //       <div class="navbar-flex">
      //       <ul className="navbar-nav mr-auto">
      //         <li className="navbar-item">
      //         <Link to="/" className="nav-link"><FontAwesomeIcon class="icon" icon={faThList}/><span class="nav-text">Posts</span></Link>
      //         </li>
      //         <li className="navbar-item">
      //         <Link to="/create" className="nav-link"><FontAwesomeIcon  class="icon" icon={faFile}/><span class="nav-text">Create Post</span></Link>
      //         </li>
      //         <li className="navbar-item">
      //         <Link to="/user" className="nav-link"><FontAwesomeIcon class="icon" icon={faUserPlus}/><span class="nav-text">Create User</span> </Link>
      //         </li>
      //       </ul>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
      <nav class="my-navbar">
        <div className="container flexer">
          <div className="brand"><Link to="/knowrona"><img src={LogoWhite} alt="" width="100%"/></Link></div>
          <ul className="my-nav">
            <li className="my-item">
            <Link to="/" className="nav-link"><FontAwesomeIcon class="icon" icon={faThList}/><span class="nav-text">Posts</span></Link>
            </li>
            <li className="my-item">
            <Link to="/create" className="nav-link"><FontAwesomeIcon  class="icon" icon={faFile}/><span class="nav-text">Create Post</span></Link>
            </li>
            <li className="my-item">
            <Link to="/user" className="nav-link"><FontAwesomeIcon class="icon" icon={faUserPlus}/><span class="nav-text">Create User</span> </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}