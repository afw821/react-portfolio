import React from 'react';
import { Link } from "react-router-dom";
import {
    MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,
    MDBCardText, MDBRow, MDBCol, MDBIcon
} from 'mdbreact';

const Card = ({ project, user, onDelete }) => {
    return (<MDBCard style={{ width: "50%" }} key={project._id}>
        <MDBCardImage
            top
            src={project.imgUrl}
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
        />
        <MDBCardBody>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <MDBCardTitle>{project.title}</MDBCardTitle>
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Link
                        to={`/projects/${project._id}`}
                        className="btn btn-info btn-sm mr-4"
                    >
                        Details
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
    </MDBCard>);
}

export default Card;