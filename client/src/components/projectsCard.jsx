import React, { Component } from "react";
import Card from "./common/card";

class ProjectsCard extends Component {
  render() {
    const { projects, onDelete, user } = this.props;
    return (
      <main className="card-wrapper-container clearfix">
        {projects.map((project) => (
          <Card
            key={project._id}
            project={project}
            user={user}
            onDelete={onDelete}
          />
        ))}
      </main>
    );
  }
}

export default ProjectsCard;
