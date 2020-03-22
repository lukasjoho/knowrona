import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faThList } from '@fortawesome/free-solid-svg-icons'
import LogoWhite from "../assets/logo-white.png"

export default class Navbar extends Component {

  render() {
    return (
      <nav class="my-navbar">
      <div className="container flexer">
        <div className="brand"><Link to="/knowrona"><img src={LogoWhite} alt="" width="100%"/></Link></div>
        <ul className="my-nav">
          <li className="my-item">
          <Link to="/" className="nav-link"><FontAwesomeIcon class="icon" icon={faThList}/><span class="nav-text">Posts</span></Link>
          </li>
          <li className="my-item">
          <Link to="/create" className="nav-link"><FontAwesomeIcon  class="icon" icon={faFileUpload}/><span class="nav-text"><span className="hide">Create Post</span><span className="show">New</span></span></Link>
          </li>
          <li className="my-item">
          <Link to="/user" className="nav-link"><FontAwesomeIcon class="icon" icon={faUserPlus}/><span class="nav-text"><span className="hide">Create </span>User</span> </Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}