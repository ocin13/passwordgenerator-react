import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

function Footer(){
    return(
        <footer className="footer-site row-content">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-2 offset-1">
                        <h3>Links:</h3>
                        <ul className="unstyled-list">
                            <li><NavLink className="footer-links" to="/home">Home</NavLink></li>
                            <li><NavLink className="footer-links" to="/generator">Generator</NavLink></li>
                            <li><NavLink className="footer-links" to="/blog">Blog</NavLink></li>
                            <li><NavLink className="footer-links" to="/help">Help</NavLink></li>
                            <li><NavLink className="footer-links" to="/info">Info</NavLink></li>
                            <li><NavLink className="footer-links" to="/contactus">contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-3">
                        <h3>Help:</h3>
                        <ul>
                            <li><a className="footer-links"  href="#"><i className="fa fa-rocket"></i> Get Started</a></li>
                            <li><a className="footer-links"  href="#"><i className="fa fa-gear"></i> How It Works</a></li>
                            <li><a className="footer-links"  href="#"><i className="fa fa-user"></i> Hi-Eden Features</a></li>
                            <li><a className="footer-links"  href="#"><i className="fa fa-android"></i> Use It On Android</a></li>
                        </ul>
                    </div>
                    <div className="col col-sm-3">
                    <h3>Information:</h3>
                            <ul>
                                <li><NavLink className="footer-links" to="#"> Services</NavLink></li>
                                <li><NavLink className="footer-links" to="#">Policy</NavLink></li>
                                <li><NavLink className="footer-links" to="#"> Cookies</NavLink></li>
                                <li><NavLink className="footer-links" to="#"> Data Protection</NavLink></li>
                            </ul>
                    </div>
                    <div className="col-12 col-sm-3 text-left">
                        <h3>Contact:</h3>
                        <ul>
                            <li><a role="button" className="footer-links" href="tel:+120000000"><i className="fa fa-phone"></i> Phone: +12000000</a></li>
                            <li><a role="button" className="footer-links" href="mailto:info@delite.com"><i className="fa fa-envelope"></i> Email: info@hieden.com</a></li>
                        </ul>
                        <ul className="social-list">
                            <li><a className="btn btn-social btn-instagram" href="https://www.instagram.com"><i className="fa fa-instagram"></i> </a></li>
                            <li><a className="btn btn-social btn facebook" href="https://www.facebook.com"><i className="fa fa-facebook"></i> </a></li>
                            <li><a className="btn btn-social btn-google" href="https://www.google.com"><i className="fa fa-google"></i> </a></li>
                            <li><a className="btn btn-social btn-twitter" href="https://www.twitter"><i className="fa fa-twitter"></i> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


