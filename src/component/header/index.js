import React from 'react'
import './style.css'
import {Navbar, NavbarBrand, NavbarToggler,NavItem,Nav,Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <Navbar className="navbar-site" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto brand" href="#">Hi-eden</NavbarBrand>
                        <NavbarToggler />
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to="/home">
                                         Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/generator">
                                         Generator
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/help">
                                        Help
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                         About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
    )
}
