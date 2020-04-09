import React, { Component } from "react";
import JumboTron from "./common/jumbotron";
import Joi from "joi-browser";
import Form from "./common/form";

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
      console.log("Logged in");
    } catch (ex) {
      console.log("error", ex);
    }
  };

  render() {
    const text = {
      message: "Administrator Login",
      description: "Admins can login here to add and remove projects",
    };

    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form
              className="pb-5 pl-5 pr-5 pt-4 login-form"
              onSubmit={this.handleSubmit}
            >
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
