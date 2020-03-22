import React from 'react'

const JumboTron = props => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4" id="message">
          {props.message}
        </h1>
        <p className="lead" id="description">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default JumboTron
