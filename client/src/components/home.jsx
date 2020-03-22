import React from 'react'
import JumboTron from './common/jumbotron'

const Home = () => {
  const text = {
    message: 'Welcome to My Portfolio Site!',
    description: 'This is My Cool Website!',
  }
  return (
    <>
      <JumboTron message={text.message} description={text.description} />
      <h1>Home</h1>
    </>
  )
}

export default Home
