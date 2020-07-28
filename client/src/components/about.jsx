import React from 'react'
import JumboTron from './common/jumbotron'
import AboutCard from './common/aboutCard';

const About = () => {
  const text = {
    message: 'About Me',
    description: 'Software Developer. Former U.S. Marine',
  }
  return (
    <>
      {/* <JumboTron message={text.message} description={text.description} /> */}
      <AboutCard />
    </>
  )
}

export default About
