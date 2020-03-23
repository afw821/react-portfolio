import React, { Component } from 'react'
import JumboTron from './common/jumbotron'

class Contact extends Component {
  render() {
    const text = {
      message: 'Contact Me',
      description: 'Please fill out the form below to get into contact with me',
    }

    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <h1>Contact Me</h1>
      </>
    )
  }
}

export default Contact
