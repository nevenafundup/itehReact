import React from "react";
import { BsCartFill } from "react-icons/bs";
import {Link} from "react-router-dom";

function Navbar({cartNum}) {
  return (
    <div className="navbar">
     
      <Link to="/ponuda" className="navbar-items"> Ponuda  </Link>
       
      <Link to="/korpa" className="navbar-items">
        <p>Korpa</p>
         
      </Link>

      <BsCartFill />
        <p className="cart-num">{cartNum}</p>

        <Link to="/kontakt" className="navbar-items"> Kontakiraj nas </Link>
    </div>
  );
}

export default Navbar;