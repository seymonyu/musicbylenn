import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar--wrapper">
      <ul className="navbar--list">
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/">
            HOME
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/about">
            ABOUT
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/music">
            MUSIC
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/promo">
            PROMO MIX
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/media">
            MEDIA
          </Link>
        </li>
        <li className="navbar--list_item">
          {" "}
          <Link className="navbar--list_link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
