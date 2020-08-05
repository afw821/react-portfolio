import React, { Component } from "react";
import { getProjectById } from "../services/projectService";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import { ThemeProvider } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      console.log("CDM  id", id);
      const { data: project } = await getProjectById(id);
      console.log("project from CDM", project);
      this.setState({ data: this.mapToViewModel(project) });

      console.log("this state from CDM", this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  render() {
    const { data: project } = this.state;
    console.log("render project", project);
    return (
      <div className="row">
        <div className="col d-flex justify-content-center">
          <MDBCard className="form-width" reverse>
            <MDBCardImage
              cascade
              style={{ height: "20rem" }}
              src={project.imgUrl}
            />
            <MDBCardBody cascade className="text-center">
              <a href={project.deployedUrl} target="_blank">
                <MDBCardTitle>{project.title}</MDBCardTitle>
              </a>
              <MDBCardHeader
                style={{ color: "black", backgroundColor: "whitesmoke" }}
              >
                Technologies Used
              </MDBCardHeader>
              {project.technologies.map((technology) => (
                <MDBCardText>{technology}</MDBCardText>
              ))}
              <MDBCardText>{project.description}</MDBCardText>
              <a href={project.gitHubUrl} target="_blank" className="ml-1">
                <i class="fab fa-github fa-2x"></i>
              </a>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
