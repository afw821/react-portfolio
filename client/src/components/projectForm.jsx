import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import JumboTron from "./common/jumbotron";
import { getTechnologies } from './../services/technologyService';
import { addProject } from "../services/projectService";

class ProjectForm extends Form {
  state = {
    data: {
      title: "",
      description: "",
      technologies: [],
      deployedUrl: "",
      gitHubUrl: "",
      imgUrl: "",
    },
    errors: {},
    technologies: [],
  };

  schema = {
    title: Joi.string().required().label("Title"),
    description: Joi.string().required().label("Description"),
    technologies: Joi.string().required().label("Technologies"),
    deployedUrl: Joi.string().label("Deployed Link"),
    gitHubUrl: Joi.string().required().label("GitHub Link"),
    imgUrl: Joi.string().required().label("Image Url"),
  };

  async componentDidMount() {
    const { data: technologies } = await getTechnologies();

    this.setState({ technologies });
  }

  doSubmit = async () => {
    try {
      const { title, description, technologies, deployedUrl, gitHubUrl, imgUrl } = this.state.data;
      const result = await addProject();
    } catch (ex) {

    }
  }
  render() {
    const text = {
      message: "Project Manager",
      description: "Add Projects Below",
    };
    const technologies = this.state.technologies;
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
              {this.renderInput("title", "Title")}
              {this.renderTextArea("description", "Description", "text", 5)}
              {technologies.map(t => (
                <div key={t._id} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onChange={this.handleCheckChange}
                    type="checkbox"
                    id={t._id}
                    value={t.name}
                  />
                  <label className="form-check-label" htmlFor={t._id}>
                    {t.name}
                  </label>
                </div>
              ))}
              {this.renderInput("deployedUrl", "Deployed Link")}
              {this.renderInput("gitHubUrl", "GitHub Link")}
              {this.renderInput("imgUrl", "Image Link")}
              {this.renderButton("Submit")}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectForm;
