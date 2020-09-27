import React, { Component } from "react";
import JumboTron from "./common/jumbotron";
import Joi from "joi-browser";
import Form from "./common/form";
import { login, getCurrentUser } from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { handleSetUserAfterLogin, handleSetActiveTab } = this.props;
      const jwt = await login(data.username, data.password);
      if (jwt) {
        handleSetUserAfterLogin();
        this.props.history.push("/project-manager"); //window.location = "/project-manager";
        handleSetActiveTab("Project_Manager");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const text = {
      message: "Project Manager",
      description: "Administrator login to manage projects",
    };

    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <div className="row">
          <div className="col d-flex justify-content-center">
            <form
              className="pb-5 pl-5 pr-5 pt-4 login-form form-width"
              onSubmit={this.handleSubmit}
            >
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              <div className="row">
                <div className="col d-flex justify-content-center">
                  {this.renderMDBBtn("Login", "info", "lock", "submit")}
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
