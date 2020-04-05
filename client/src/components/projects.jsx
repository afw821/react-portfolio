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
    console.log("projects", projects);
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
        <ProjectsCard
          projects={projects}
          pageSize={pageSize}
          currentPage={currentPage}
          searchQuery={searchQuery}
        />
        <div className="row">
          <div className="col-4">
            <div className="card">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
