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
        <div className="col-4"></div>
        <div className="col-4">
          <MDBCard reverse>
            <MDBCardImage
              cascade
              style={{ height: "20rem" }}
              src={project.imgUrl}
            />
            <MDBCardBody cascade className="text-center">
              <a href={project.deployedUrl} target="_blank">
                <MDBCardTitle>{project.title}</MDBCardTitle>
              </a>

              <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                <MDBCardHeader
                  style={{ color: "black", backgroundColor: "whitesmoke" }}
                >
                  Technologies Used
                </MDBCardHeader>
                <MDBCardBody>
                  {project.technologies.map((technology) => (
                    <MDBCardText>{technology}</MDBCardText>
                  ))}
                </MDBCardBody>
              </MDBCard>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <a href="#!" className="icons-sm li-ic ml-1">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="icons-sm tw-ic ml-1">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" />
              </a>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
