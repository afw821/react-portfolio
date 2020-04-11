import React, { Component } from "react";
import JumboTron from "./common/jumbotron";
import Form from "./common/form";
import Joi from "joi-browser";
import { Button, Modal } from "react-bootstrap";
import { sendMessage } from "../services/emailService";
import { Model } from "mongoose";

class ContactForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
    show: false,
  };

  schema = {
    name: Joi.string().required().min(1).max(25).label("Name"),
    email: Joi.string().email().min(3).max(50).required().label("Email"),
    message: Joi.string().required().min(5).max(255).label("Message"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const result = await sendMessage(data.email, data.message, data.name);
      if (result) {
        const data = {
          name: "",
          email: "",
          message: "",
        };
        this.setState({ data, show: true });
      }
    } catch (ex) {
      console.log("error", ex);
    }
  };

  handleModalClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const text = {
      message: "Contact Me",
      description: "Please fill out the form below to get into contact with me",
    };

    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <Modal show={this.state.show}>
          <Modal.Header>Thank You</Modal.Header>
          <Modal.Body>Your Message Has Successfully Been Sent</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleModalClick()}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form
              className="pb-5 pl-5 pr-5 pt-4 login-form"
              onSubmit={this.handleSubmit}
            >
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "E-mail", "email")}
              {this.renderTextArea("message", "Message", "text", 5)}
              {this.renderButton("Submit")}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ContactForm;
