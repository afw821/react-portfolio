import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

const Card = ({ project, user, onDelete }) => {
  return (
    <MDBCard className="project-card" key={project._id}>
      <MDBCardImage
        style={{ width: "100%", height: "10rem" }}
        top
        src={project.imgUrl}
        overlay="white-slight"
        hover
        waves
        alt="MDBCard image cap"
      />
      <MDBCardBody style={{ height: "5rem" }}>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <MDBCardTitle>{project.title}</MDBCardTitle>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Link to={`/projects/${project._id}`}>
              <MDBBtn color="indigo" size="sm">
                <MDBIcon far icon="clone" className="left" /> Project Details
              </MDBBtn>
            </Link>
            {user && user.isAdmin && (
              <button
                type="button"
                onClick={() => onDelete(project._id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
