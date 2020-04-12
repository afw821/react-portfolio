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

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const user = this.state;
    const h100 = {
      height: "calc(92vh)",
    };
    return (
      <>
        <NavBar user={user} />
        <div className="container-fluid bg-color" style={h100}>
          <Switch>
            <ProtectedRoute
              path="/projects/form"
              exact
              component={ProjectForm}
            />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/projects" component={Projects} />
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
