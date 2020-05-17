import React from "react";

const JumboTron = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
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
              <button className="btn btn-info"> Download My Resume</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default JumboTron;
