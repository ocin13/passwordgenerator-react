import React, { Component } from 'react'
import './style.css'
import {Navbar, NavbarBrand, NavbarToggler,NavItem,Nav,Collapse} from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav(event) {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return (
            <Navbar className="navbar-site" sticky="top" expand="md">
                        <div className="container">
                            <NavbarBrand className="mr-auto brand"><Link to='/home'>Hi-eden</Link></NavbarBrand>
                            <NavbarToggler onClick={(event) => this.toggleNav(event)} ><i className={!this.state.isNavOpen ? "fa fa-bars" : "fa fa-times"} id="toggleButton"></i></NavbarToggler>
                            <Collapse navbar isOpen={this.state.isNavOpen}>
                                <Nav className="ml-auto" navbar>
                                    <NavItem >
                                        <NavLink className="nav-link" to="/home" onClick={(event) => this.toggleNav(event)}>
                                             Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/generator" onClick={(event) => this.toggleNav(event)}>
                                             Generator
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/help" onClick={(event) => this.toggleNav(event)}>
                                            Help
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/info" onClick={(event) => this.toggleNav(event)}>
                                             Info
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink className="nav-link" to="/blog" onClick={(event) => this.toggleNav(event)}>
                                             Blog
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus" onClick={(event) => this.toggleNav(event)}>
                                            Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
        )
    }
}

export default Header;
