import React from "react";

const JumboTron = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 d-flex justify-content-center" id="message">
          {props.message}
        </h1>
        {props.resume && (
          <a href={props.resume} download>
            <button className="btn btn-primary btn-sm">My Resume</button>
          </a>
        )}
        <p className="lead d-flex justify-content-center" id="description">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default JumboTron;
