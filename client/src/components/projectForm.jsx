import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import JumboTron from "./common/jumbotron";
import { getTechnologies } from "./../services/technologyService";
import { addProject } from "../services/projectService";
import PopUpModal from "./common/modal";

class ProjectForm extends Form {
  state = {
    data: {
      title: "",
      description: "",
      deployedUrl: "",
      gitHubUrl: "",
      imgUrl: "",
    },
    errors: {},
    selectedTechnologies: [],
    technologies: [],
    show: false,
  };

  schema = {
    title: Joi.string().required().label("Title"),
    description: Joi.string().required().label("Description"),
    // technologies: Joi.string().required().label("Technologies"),
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
      const {
        title,
        description,
        deployedUrl,
        gitHubUrl,
        imgUrl,
      } = this.state.data;
      const { selectedTechnologies } = this.state;
      const { data } = await addProject(
        title,
        description,
        selectedTechnologies,
        deployedUrl,
        gitHubUrl,
        imgUrl
      );
      if (data.status)
        this.setState({
          data: {
            title: "",
            description: "",
            deployedUrl: "",
            gitHubUrl: "",
            imgUrl: "",
          },
          show: true,
        });
    } catch (ex) {}
  };

  handleModalClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const text = {
      message: "Project Manager",
      description: "Add Projects Below",
    };
    const technologies = this.state.technologies;
    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <PopUpModal
          show={this.state.show}
          header="Thank You"
          body="Project Successfully Added"
          onClose={this.handleModalClick}
        />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form
              className="pb-5 pl-5 pr-5 pt-4 login-form"
              onSubmit={this.handleSubmit}
            >
              {this.renderInput("title", "Title")}
              {this.renderTextArea("description", "Description", "text", 5)}
              {this.renderCheckbox(technologies, "Technology")}
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
