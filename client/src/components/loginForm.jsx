import React, { Component } from 'react'
import JumboTron from './common/jumbotron'
import Input from './common/input'
import Joi from 'joi-browser'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  }

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password'),
  }

  validateProperty = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required'
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required'
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value

    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)

    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    this.setState({ account, errors })
  }

  validate = () => {
    const options = { abortEarly: false }
    const { error } = Joi.validate(this.state.account, this.schema, options)
    if (!error) return null

    const errors = {}

    for (let item of error.details) errors[item.path[0]] = item.message

    return errors
  }

  handleSubmit = e => {
    e.preventDefault()

    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
  }

  render() {
    const text = {
      message: 'Administrator Login',
      description: 'Admins can login here to add and remove projects',
    }
    const { account, errors } = this.state

    return (
      <>
        <JumboTron message={text.message} description={text.description} />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form
              className="pb-5 pl-5 pr-5 pt-4 account-login-form"
              onSubmit={this.handleSubmit}
            >
              <Input
                name="username"
                value={account.username}
                label="Username"
                onChange={this.handleChange}
                type="text"
                error={errors.username}
              />
              <Input
                name="password"
                value={account.password}
                label="Password"
                onChange={this.handleChange}
                type="password"
                error={errors.password}
              />
              <button className="btn btn-primary btn-sm">Login</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default LoginForm
