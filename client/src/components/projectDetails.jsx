import React from "react";

const ProjectDetails = (props) => {
  const projectId = props.match.params.id;
  return <h1>{projectId}</h1>;
};

export default ProjectDetails;
