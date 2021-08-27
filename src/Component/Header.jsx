import React from 'react'

export default function Header () {
    return(
        <nav >
    <div className="nav-wrapper lime darken-4 flex">
      <a href="#" className="brand-logo">ReactShop</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#" >Movie</a></li>
        <li><a href="#">Multfilms</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
  </nav>
        
    )
}