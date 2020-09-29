import React, { Component } from "react";
import { getProjectById } from "../services/projectService";
import { MDBIcon, MDBRow, MDBCol } from "mdbreact";

class ProjectDetails extends Component {
  state = {
    data: {
      _id: "",
      title: "",
      description: "",
      technologies: [],
      deployedUrl: "",
      gitHubUrl: "",
      imgUrl: "",
    },
  };
  mapTechnologies(technologies) {
    return technologies;
  }
  mapToViewModel(project) {
    return {
      _id: project._id,
      title: project.title,
      description: project.description,
      technologies: this.mapTechnologies(project.technologies),
      deployedUrl: project.deployedUrl,
      gitHubUrl: project.gitHubUrl,
      imgUrl: project.imgUrl,
    };
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const { data: project } = await getProjectById(id);
      this.setState({ data: this.mapToViewModel(project) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  render() {
    const { data: project } = this.state;
    return (
      <section className="my-5">
        <a href={project.deployedUrl} target="_blank">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            {project.title}
          </h2>
        </a>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src={project.imgUrl}
              alt={`${project.title} picture`}
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="code-branch" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Project Description</h5>
                <p className="black-text">{project.description}</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="code" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technologies Used</h5>
                <div className="black-text d-flex flex-row flex-wrap">
                  {project.technologies.map((technology, i, arr) => (
                    <div key={project._id} className="mr-2">
                      {technology}
                      {i + 1 === arr.length ? "" : ","}
                    </div>
                  ))}
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="link" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Links</h5>
                <div className="black-text d-flex flex-row">
                  <div className="d-flex flex-column">
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="ml-1 mr-5"
                    >
                      <i className="fab fa-github fa-2x"></i>
                    </a>
                    <small>GitHub</small>
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      className="ml-1"
                    >
                      <MDBIcon
                        className="mr-3 ml-3"
                        fab
                        icon="chrome"
                        size="2x"
                      />
                    </a>
                    <small>Deployed Site</small>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}

export default ProjectDetails;
