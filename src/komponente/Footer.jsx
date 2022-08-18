import React from "react";
import {Link} from "react-router-dom";

function Footer( ) {
  return (
    
    <div className="page-wrapper">
         
         <footer>
            <div className="footer-top">
                <div className="pt-exebar">

                </div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
                        <div className="widget footer_widget">
                            <h5 className="footer-title">Address</h5>
                            
                            <div className="gem-contacts">
                                <div className="gem-contacts-item gem-contacts-address">Corporate Office :<br/> Doon House, B-275(A), First floor
                                    Sector-57, Shushant Lok 3
                                    Near Hong Kong Bazzar, Gurugram Pin 122001, Haryana.
                                </div>
                                <div className="gem-contacts-item gem-contacts-phone"><i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="">+91-9122588799</a></div>

                                <div className="gem-contacts-item gem-contacts-address mt-2">Reg. Office :<br/> Doon House, D2/3,
                                    4th Floor, Chandra Tower, IDBI Bank Building
                                    Dimna Road, Mango, Jamshedpur-831012, Jharkhand.</div>
                                <div className="gem-contacts-item gem-contacts-phone"><i className="fa fa-phone" aria-hidden="true"></i> Phone: <a>+91 9122588799</a></div>

                            </div>
                        </div>

                    </div>
                    
        
                     
                
            </div>
            <div className="footer-bottom">
                <div className="container">
                <div className="row">

                    <div className="col-md-3">
                    <div className="footer-site-info">2020 © <a href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s" target="_blank">Top HTML & CSS Program </a></div>
                    </div>

                    <div className="col-md-6">
                    <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                        <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                        <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="#">Support</a></li>
                        <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="#">Contact Us</a></li>
                        <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#">Disclaimer</a></li>
                        <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"><a href="#">Add more</a></li>
                        </ul>
                    </nav>
                    </div>
 

                </div>
                </div>
            </div>
        
        </div>
    </div>
    </footer>
    </div>
  );
}

export default Footer;