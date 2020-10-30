import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class NavBarView extends Component {
  render() {
    return (
      <Navbar bg="transparent" variant="light" fixed="top" expand="lg">
        <Navbar.Brand href="#home">
          {' '}
          Travel <small>AnyWhere</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" mr-auto"></Nav>
          <Nav>
            <NavLink
              className="nav-link"
              activeClassName="link-active"
              exact="true"
              to="/home"
            >
              home
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="link-active"
              to="/signup"
            >
              register
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="link-active"
              to="/login"
            >
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
