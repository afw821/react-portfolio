import React from 'react'
import JumboTron from './common/jumbotron'

const About = () => {
  const text = {
    message: 'I am a Software Developer',
    description: 'My name is Alex Watkins and I am Software Developer',
  }
  return (
    <>
      <JumboTron message={text.message} description={text.description} />
      <h1>About</h1>
    </>
  )
}

export default About
