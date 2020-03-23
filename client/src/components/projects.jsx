import React, { Component } from 'react'
import JumboTron from './common/jumbotron'

class Projects extends Component {
  render() {
    const text = {
      message: 'My Projects',
      description: 'Below is a complete list of the projects I have worked on',
    }
    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <h1>Projects</h1>
      </>
    )
  }
}

export default Projects
