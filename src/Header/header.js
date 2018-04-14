import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';
import './header.css'


const Img = <img src='./Horizontal_Logo_Gifts-In-Kind.jpg' alt={"YourBrand"}/>;

class Header extends Component {

  render() {
    return (
        <Navbar brand='logo' right className="teal lighten-2 red-text">
            <NavItem  href='index.html'>HOME</NavItem>
            <NavItem  href='index.html'>ABOUT US</NavItem>
            <NavItem  href='index.html'>GET INVOLVED</NavItem>
            <NavItem  href='index.html'>OUR IMPACT</NavItem>
            <NavItem  href='index.html'>NON PROFITS</NavItem>
        </Navbar>
    );
  }
}

export default Header;
