import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
 
 const [burger,setBurger]= useState(true);



  const burgerCross=()=>{
    setBurger(!burger);

  }
  return (
   <div className='navbar--container'>
    <div className={burger ? 'navbar--hidden': "navbar--wrapper"}>
      <ul className="navbar--list">
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/" onClick={burgerCross}>
            HOME
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/about" onClick={burgerCross}>
            ABOUT
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/music" onClick={burgerCross}>
            MUSIC
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/promo" onClick={burgerCross}>
            PROMO MIX
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/media" onClick={burgerCross}>
            MEDIA
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/contact" onClick={burgerCross}>
            CONTACT
          </Link>
        </li>
      </ul>
     
      </div>
       <div className={burger ? "burger" : "burgercross"} onClick={burgerCross}>
    <div className='line1'></div>
    <div className='line2'></div>
    <div className='line3'></div>

      
      </div>
    </div>
  );
}

export default Navbar;
