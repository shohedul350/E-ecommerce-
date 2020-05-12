import React from 'react'
import {Link} from 'react-router-dom'

import styled from 'styled-components';

const Navbar = () => {

  return (

   <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav">
       
                <li className="nav-item active" > <Link className="nav-link" to='/'>
                    HOME<span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item active  " > <Link className="nav-link" to='/shop'>
                    SHOP<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active  " > <Link className="nav-link" to='/my-account'>
                    MY ACCOUNT<span className="sr-only">(current)</span></Link>
                </li>
                
                <li className="nav-item active  " > <Link className="nav-link" to='/contact'>
                    CONTACT US<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active  " > <Link className="nav-link" to='/about-application'>
                    ABOUT APPLICATION<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active  " > <Link className="nav-link" to='/about'>
                    ABOUT DEVELOPER<span className="sr-only">(current)</span></Link>
                </li>
           </ul>
           
           </div>
           </nav> 
    



  )
}


export default Navbar