import React from 'react'
import NavBar from './components/navBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/home'
import LoginForm from './components/login'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import NotFound from './components/notFound'

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  )
}

export default App
