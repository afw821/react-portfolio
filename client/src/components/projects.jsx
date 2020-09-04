import React, { Component } from "react";
import JumboTron from "./common/jumbotron";
import ProjectsCard from "./projectsCard";
import { paginate } from "../utils/paginate";
import { getProjects, deleteProject } from "../services/projectService";
import Paginator from "./common/paginator";
import _ from "lodash";
import PopUpModal from "./common/modal";

class Projects extends Component {
  state = {
    projects: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    show: false,
    idToDelete: null,
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

  handleDelete = async () => {
    const id = this.state.idToDelete;
    const originalProjects = this.state.projects;
    const projects = originalProjects.filter((p) => p._id !== id);
    this.setState({ projects: projects, idToDelete: null, show: false });
    try {
      await deleteProject(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.setState({ projects: originalProjects });
      }
    }
  };

  handleToggleModal = (id) => {
    this.setState({ show: !this.state.show, idToDelete: id });
  };

  render() {
    const {
      projects: allProjects,
      pageSize,
      currentPage,
      searchQuery,
      show,
    } = this.state;
    const { user } = this.props;
    const text = {
      message: "My Projects",
      description: `Below is a complete list of the projects I have created or contributed to. 
        I am a full stack JavaScript developer and specialize in React, Node, MySQL, MongoDB, C# and ASP.NET`,
    };

    const { totalCount, data: projects } = this.getPagedData();
    return (
      <>
        <PopUpModal
          show={show}
          header={"Warning"}
          body={"Are You Sure you want to delete this project?"}
          deleteBtn={true}
          onClose={this.handleToggleModal}
          onDelete={this.handleDelete}
        />
        <JumboTron message={text.message} description={text.description} />
        <ProjectsCard
          projects={projects}
          onDelete={this.handleToggleModal}
          user={user}
        />
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
