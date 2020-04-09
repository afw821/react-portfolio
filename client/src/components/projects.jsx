import React, { Component } from "react";
import JumboTron from "./common/jumbotron";
import ProjectsCard from "./projectsCard";
import { getProjects } from "../services/projectService";

class Projects extends Component {
  state = {
    projects: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: projects } = await getProjects();
    this.setState({ projects });
  }

  render() {
    const { projects, pageSize, currentPage, searchQuery } = this.state;
    const text = {
      message: "My Projects",
      description: "Below is a complete list of the projects I have worked on",
    };
    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <ProjectsCard projects={projects} />
      </>
    );
  }
}

export default Projects;
