import React from 'react';
import { Navbar, Nav, NavDropdown,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiFacebook,CiInstagram,CiTwitter,CiYoutube } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";

const NavbarLink = () => {

  return (
    <Row>
         <div id="promotionBar" className="electron-promotion-bar ">
            <div className='inner d-flex justify-content-center'>
                <span id="promotionClose" className="panel-close"></span>
                30% discount on all products special for November!	
            </div>
        </div>
        <Navbar bg="light" expand="lg" className="d-flex justify-content-around offer-navbar">
            {/* First Element */}
            <div className="header-col ">
                <Nav className="upper-navbar-list flex-row">
                    <NavDropdown title="Languages" id="basic-nav-dropdown" className='upper-navbar-title'>
                        <Nav className="upper-navbar-dropdown">
                            <NavDropdown.Item as={Link} to="/english">
                            English
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/arabic">
                            Arabic
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/chinese">
                            Chinese
                            </NavDropdown.Item>
                        </Nav>
                    </NavDropdown>
                    <NavDropdown title="Country" id="basic-nav-dropdown" className='upper-navbar-title'>
                        <Nav className="upper-navbar-dropdown">
                            <NavDropdown.Item as={Link} to="/usd">
                            United States (USD)
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/eur">
                            Deutschland (EUR)
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/jpy">
                            Japan (JPY)
                            </NavDropdown.Item>
                        </Nav>
                    </NavDropdown>
                    <NavDropdown title="Quick Help" id="basic-nav-dropdown" className='upper-navbar-title'>
                        <Nav className="upper-navbar-dropdown">
                            <NavDropdown.Item as={Link} to="/order-tracking">
                            Order Tracking
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/contact">
                            Contact
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/faq">
                            FAQ
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/find-us">
                            Find Us
                            </NavDropdown.Item>
                        </Nav>
                    </NavDropdown>
                </Nav>
            </div>
            
        

        {/* Second Element */}
        <div className="header-col 	d-none d-md-block">
            <div className="header-offer-container">
                <div className="shipping-offer-details">
                    <span className="background-note"><LuMessageSquare /></span>
                    FREE SHIPPING FOR ALL ORDERS OF $340
                </div>
            </div>
        </div>

        {/* Third Element */}
        <div className="header-col  social-contact-icon-wrapper">
            <div className="header-shortcode d-flex">
            <Link to="#" className="social-icons-wrapper">
                <span className="nt-icon-facebook social-icons"><CiFacebook /></span>
            </Link>
            <Link to="#" className="social-icons-wrapper">
                <span className="nt-icon-instagram social-icons"><CiInstagram /></span>
            </Link>
            <Link to="#" className="social-icons-wrapper">
                <span className="nt-icon-twitter social-icons"><CiTwitter /></span>
            </Link>
            <Link to="#" className="social-icons-wrapper">
                <span className="nt-icon-youtube social-icons"><CiYoutube /></span>
            </Link>
            </div>
        </div>
        </Navbar>
    </Row>
  );
};

export default NavbarLink;
