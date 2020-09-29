import React, { Component, createRef } from "react";
import { getProjects, updateProject } from "../services/projectService";
import { MDBBadge, MDBBtn } from "mdbreact";
import { toast } from "react-toastify";

class ProjectOrder extends Component {
  state = {
    projects: [],
  };

  draggingItem = createRef();
  dragOverItem = createRef();

  async componentDidMount() {
    const { data: projects } = await getProjects();

    this.setState({ projects });
  }

  handleDragStart = (e, position) => {
    this.draggingItem.current = position;
  };

  handleDragEnd = (e, position) => {
    const projClone = [...this.state.projects];
    projClone.forEach(async (project, i, arr) => {
      try {
        project.sequence = i + 1;

        const projectId = project._id;
        const technologies = project.technologies;
        const deployedUrl = project.deployedUrl;
        const description = project.description;
        const gitHubUrl = project.gitHubUrl;
        const imgUrl = project.imgUrl;
        const sequence = project.sequence;
        const title = project.title;
        const { data: newProject } = await updateProject(
          projectId,
          sequence,
          title,
          technologies,
          imgUrl,
          gitHubUrl,
          description,
          deployedUrl
        );
        if (newProject && i + 1 === arr.length)
          toast.success("Projects Reordered");
      } catch (ex) {
        toast.error(ex.response.data);
      }
    });
  };

  handleDragEnter = (e, position) => {
    this.dragOverItem.current = position;

    const projectClone = [...this.state.projects];

    const draggingItemContent = projectClone[this.draggingItem.current];
    projectClone.splice(this.draggingItem.current, 1);
    projectClone.splice(this.dragOverItem.current, 0, draggingItemContent);

    this.draggingItem.current = this.dragOverItem.current;
    this.dragOverItem.current = null;
    this.setState({ projects: projectClone });
  };

  render() {
    const { projects } = this.state;
    const { clientWidth } = this.props;
    return (
      <div
        className={`${
          clientWidth > 683 ? "col-10" : "col-12"
        } d-flex flex-column`}
        style={{ padding: `${clientWidth > 683 ? "0 25% 0 15%" : "0 15%"}` }}
      >
        {projects.map((project, i) => (
          <MDBBtn
            className="grabbable"
            key={project._id}
            draggable
            onDragStart={(e) => this.handleDragStart(e, i)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => this.handleDragEnter(e, i)}
            onDragEnd={(e) => this.handleDragEnd(e, i)}
            style={{ borderRadius: "10px" }}
            color="info"
          >
            {project.title}
            <MDBBadge color="success" className="ml-2">
              {i + 1}
            </MDBBadge>
            <span className="sr-only">unread messages</span>
          </MDBBtn>
        ))}
      </div>
    );
  }
}

export default ProjectOrder;
