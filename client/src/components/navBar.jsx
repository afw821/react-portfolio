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
  handleHover = (e) => {
    e.currentTarget.style.borderBottom = "2px solid white";
  };

  handleLeave = (e) => {
    e.currentTarget.style.borderBottom = "2px solid transparent";
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
            <MDBNavItem onClick={() => handleSetActiveTab("Home")}>
              <MDBNavLink
                onMouseEnter={(e) => this.handleHover(e)}
                onMouseLeave={(e) => this.handleLeave(e)}
                className="brd_transparent"
                style={activeTab === "Home" ? { color: "#f6b519" } : { "": "" }}
                name="Home"
                to="/home"
              >
                HOME
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={() => handleSetActiveTab("About")}>
              <MDBNavLink
                onMouseEnter={(e) => this.handleHover(e)}
                onMouseLeave={(e) => this.handleLeave(e)}
                className="brd_transparent"
                style={
                  activeTab === "About" ? { color: "#f6b519" } : { "": "" }
                }
                name="About"
                to="/about"
              >
                ABOUT
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={() => handleSetActiveTab("Projects")}>
              <MDBNavLink
                onMouseEnter={(e) => this.handleHover(e)}
                onMouseLeave={(e) => this.handleLeave(e)}
                className="brd_transparent"
                style={
                  activeTab === "Projects" ? { color: "#f6b519" } : { "": "" }
                }
                name="Projects"
                to="/projects"
              >
                PROJECTS
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={() => handleSetActiveTab("Contact")}>
              <MDBNavLink
                onMouseEnter={(e) => this.handleHover(e)}
                onMouseLeave={(e) => this.handleLeave(e)}
                className="brd_transparent"
                style={
                  activeTab === "Contact" ? { color: "#f6b519" } : { "": "" }
                }
                name="Contact"
                to="/contact"
              >
                CONTACT
              </MDBNavLink>
            </MDBNavItem>
            {user && (
              <MDBNavItem onClick={() => handleSetActiveTab("Project_Manager")}>
                <MDBNavLink
                  onMouseEnter={(e) => this.handleHover(e)}
                  onMouseLeave={(e) => this.handleLeave(e)}
                  className="brd_transparent"
                  style={
                    activeTab === "Project_Manager"
                      ? { color: "#f6b519" }
                      : { "": "" }
                  }
                  name="Project_Manager"
                  to="/project-manager"
                >
                  PROJECT MANAGER
                </MDBNavLink>
              </MDBNavItem>
            )}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {!user && (
              <MDBNavItem onClick={() => handleSetActiveTab("Login")}>
                <MDBNavLink
                  onMouseEnter={(e) => this.handleHover(e)}
                  onMouseLeave={(e) => this.handleLeave(e)}
                  className="brd_transparent"
                  style={
                    activeTab === "Login" ? { color: "#f6b519" } : { "": "" }
                  }
                  name="Login"
                  to="/login"
                >
                  LOGIN
                </MDBNavLink>
              </MDBNavItem>
            )}
            {user && (
              <MDBNavItem>
                <MDBNavLink
                  onMouseEnter={(e) => this.handleHover(e)}
                  onMouseLeave={(e) => this.handleLeave(e)}
                  className="brd_transparent"
                  style={
                    activeTab === "Logout" ? { color: "#f6b519" } : { "": "" }
                  }
                  name="Logout"
                  to="/logout"
                >
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
