import React, { Component } from 'react';
import { Navbar, NavItem, Row, Col } from 'react-materialize';
import './header.css'

const img = (
  <Row>
    <Col s="6">
      <img src='/GiftsInKind.png' height='100' alt={"Gifts In Kind"} />
    </Col>
    <Col s="6">
      <p className="title">GIFTS IN KIND</p>
    </Col>
  </Row>)


class Header extends Component {

  render() {
    return (
      <Navbar brand={img} right className="white black-text">
        <NavItem href='index.html' className="black-text">HOME</NavItem>
        <NavItem href='index.html'>ABOUT US</NavItem>
        <NavItem href='index.html'>GET INVOLVED</NavItem>
        <NavItem href='index.html'>OUR IMPACT</NavItem>
        <NavItem href='index.html'>NON PROFITS</NavItem>
      </Navbar>
    );
  }
}

export default Header;
