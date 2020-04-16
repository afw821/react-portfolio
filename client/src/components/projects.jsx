import React, { Component } from "react";
import JumboTron from "./common/jumbotron";
import ProjectsCard from "./projectsCard";
import { paginate } from "../utils/paginate";
import { getProjects, deleteProject } from "../services/projectService";
import Paginator from "./common/paginator";
import _ from "lodash";

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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      projects: allProjects,
      searchQuery,
    } = this.state;

    let filter = allProjects;

    const projects = paginate(filter, currentPage, pageSize);

    return { totalCount: filter.length, data: projects };
  };

  handleDelete = async (id) => {
    console.log(`project ${id} deleted!`);
    const result = await deleteProject(id);
    console.log('result delete', result);
  };

  render() {
    const {
      projects: allProjects,
      pageSize,
      currentPage,
      searchQuery,
    } = this.state;
    const { user } = this.props;
    const text = {
      message: "My Projects",
      description: "Below is a complete list of the projects I have worked on",
    };

    const { totalCount, data: projects } = this.getPagedData();
    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <ProjectsCard projects={projects} onDelete={this.handleDelete} user={user} />
        <Paginator
          itemsCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </>
    );
  }
}

export default Projects;
