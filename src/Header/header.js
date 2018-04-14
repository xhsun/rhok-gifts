import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';
import './header.css'


const Img = <img src='/Vertical_Logo_Gifts In-kind.png' height='100'   alt={"YourBrand"}/>;

class Header extends Component {

  render() {
    return (
        <Navbar brand={Img} right className="white black-text">
            <NavItem  href='index.html' className="black-text">HOME</NavItem>
            <NavItem  href='index.html'>ABOUT US</NavItem>
            <NavItem  href='index.html'>GET INVOLVED</NavItem>
            <NavItem  href='index.html'>OUR IMPACT</NavItem>
            <NavItem  href='index.html'>NON PROFITS</NavItem>
        </Navbar>
    );
  }
}

export default Header;
