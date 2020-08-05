import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";

class NavBar extends Component {
  state = {
    collapse: false,
    isWideEnough: false,
  };

  handleClick = (e) => {
    this.setState({ collapse: !this.state.collapse });
  };
  render() {
    const { user, activeTab, handleSetActiveTab } = this.props;
    const { collapse, isWideEnough } = this.state;
    return (
      //   <header>
      <MDBNavbar
        style={{ opacity: "0.7" }}
        color="black"
        dark
        expand="md"
        fixed="top"
        scrolling
      >
        <MDBNavbarBrand href="/">
          <Link className="navbar-brand" to="/">
            Alex Watkins
          </Link>
        </MDBNavbarBrand>
        {!isWideEnough && <MDBNavbarToggler onClick={this.handleClick} />}
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem
              onClick={() => handleSetActiveTab("Home")}
              active={activeTab === "Home"}
            >
              <MDBNavLink name="Home" to="/home">
                HOME
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              onClick={() => handleSetActiveTab("About")}
              active={activeTab === "About"}
            >
              <MDBNavLink name="About" to="/about">
                ABOUT
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              onClick={() => handleSetActiveTab("Projects")}
              active={activeTab === "Projects"}
            >
              <MDBNavLink name="Projects" to="/projects">
                PROJECTS
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              onClick={() => handleSetActiveTab("Contact")}
              active={activeTab === "Contact"}
            >
              <MDBNavLink name="Contact" to="/contact">
                CONTACT
              </MDBNavLink>
            </MDBNavItem>
            {user && (
              <MDBNavItem
                onClick={() => handleSetActiveTab("Project_Manager")}
                active={activeTab === "Project_Manager"}
              >
                <MDBNavLink name="Project_Manager" to="/project-manager">
                  PROJECT MANAGER
                </MDBNavLink>
              </MDBNavItem>
            )}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {!user && (
              <MDBNavItem
                onClick={() => handleSetActiveTab("Login")}
                active={activeTab === "Login"}
              >
                <MDBNavLink name="Login" to="/login">
                  LOGIN
                </MDBNavLink>
              </MDBNavItem>
            )}
            {user && (
              <MDBNavItem active={activeTab === "Logout"}>
                <MDBNavLink name="Logout" to="/logout">
                  LOGOUT
                </MDBNavLink>
              </MDBNavItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavBar;
