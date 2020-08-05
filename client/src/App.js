import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import About from "./components/about";
import ContactForm from "./components/contactForm";
import Projects from "./components/projects";
import NotFound from "./components/notFound";
import ProjectDetails from "./components/projectDetails";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import ProjectForm from "./components/projectForm";
import Logout from "./components/logout";
class App extends Component {
  state = {
    user: null,
    activeTab: "Home",
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleSetActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleSetUserAfterLogin = () => {
    const user = auth.getCurrentUser();
    this.setState({ user });
  };

  render() {
    const { user, activeTab } = this.state;

    const h100 = {
      minHeight: "100vh" /* will cover the 100% of viewport */,
      overflow: "hidden",
      display: "block",
      position: "relative",
      paddingTop: "85px", //height of navbar + extra padding
      // paddingBottom: "209px", //this needs to be the height of the footer
      // backgroundColor: "#fdf9f3" /* height of your footer */,
    };
    return (
      <>
        <NavBar
          handleSetActiveTab={this.handleSetActiveTab}
          activeTab={activeTab}
          user={user}
        />
        <div className="container-fluid bg-color" style={h100}>
          <Switch>
            <ProtectedRoute
              path="/project-manager"
              exact
              component={ProjectForm}
            />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/home" component={Home} />
            <Route
              path="/login"
              render={(props) => (
                <LoginForm
                  {...props}
                  handleSetActiveTab={this.handleSetActiveTab}
                  handleSetUserAfterLogin={this.handleSetUserAfterLogin}
                />
              )}
            />
            <Route path="/logout" component={Logout} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactForm} />
            <Route
              path="/projects"
              render={(props) => <Projects {...props} user={this.state.user} />}
            />
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
