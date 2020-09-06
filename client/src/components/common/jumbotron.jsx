import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
const JumboTron = (props) => {
  return (
    <div
      style={{ backgroundColor: "whitesmoke" }}
      className="jumbotron jumbotron-fluid"
    >
      <div className="container">
        <h1 className="display-4 d-flex justify-content-center" id="message">
          {props.message}
        </h1>
        <p className="lead d-flex justify-content-center" id="description">
          {props.description}
        </p>
        {props.resume && (
          <div className="d-flex justify-content-center">
            <a href={props.resume} download>
              <MDBBtn outline color="primary" className="waves-effect">
                Download My Resume <MDBIcon icon="download" />
              </MDBBtn>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default JumboTron;
