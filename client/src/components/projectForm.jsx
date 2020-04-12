import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class ProjectForm extends Form {
  state = {
    data: {
      title: "",
      description: "",
      technologies: "",
      deployedUrl: "",
      gitHubUrl: "",
      imgUrl: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    description: Joi.string().required().label("Description"),
    technologies: Joi.string().required().label("Technologies"),
    deployedUrl: Joi.string().label("Deployed Link"),
    gitHubUrl: Joi.string().required().label("GitHub Link"),
    imgUrl: Joi.string().required().label("Image Url"),
  };
  render() {
    return null;
  }
}

export default ProjectForm;
