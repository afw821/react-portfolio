import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectsCard extends Component {
  render() {
    const { projects, onDelete, user } = this.props;
    return (
      <div className="row">
        {projects.map((project) => (
          <div key={project._id} className="col-6 mb-4">
            <div className="card min-height">
              <div className="card-body theme-color">
                <div className="row">
                  <div className="col-8">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">
                      {project.technologies.map((technology) => (
                        <span key={technology._id} className="mr-2">
                          {technology}
                        </span>
                      ))}
                    </p>
                    <p className="card-text">{project.description}</p>
                    <Link
                      to={`/projects/${project._id}`}
                      className="btn btn-info mr-4"
                    >
                      Details
                    </Link>
                    {user && user.isAdmin && (
                      <button
                        type="button"
                        onClick={() => onDelete(project._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                  <div className="col-4">
                    <img className="picture-fix" src={project.imgUrl}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsCard;
