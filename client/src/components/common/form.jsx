import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import TextArea from "./textArea";
import CheckBox from "./checkbox";
import { MDBBtn, MDBIcon } from "mdbreact";

class Form extends Component {
  state = {
    data: {},
    errors: {},
    selectedTechnologies: [],
    technologies: [],
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleCheckChange = ({ currentTarget: input }) => {
    const newTechnology = input.value;
    const isChecked = input.checked;
    const selected = [...this.state.selectedTechnologies];
    if (isChecked) selected.push(newTechnology);
    else {
      const index = selected.indexOf(newTechnology);
      selected.splice(index, 1);
    }
    this.setState({ selectedTechnologies: selected });
  };

  renderButton(label, isValidator) {
    return <button className="btn btn-info btn-sm">{label}</button>;
  }

  renderMDBBtn(btnText, color, icon, type) {
    return (
      <MDBBtn type={type} color={color}>
        {btnText} <MDBIcon icon={icon} />
      </MDBBtn>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        type={type}
        error={errors[name]}
      />
    );
  }
  renderCheckbox(technologies, label) {
    const { data, errors } = this.state;
    return (
      <CheckBox
        technologies={technologies}
        label={label}
        onChange={this.handleCheckChange}
      />
    );
  }

  renderTextArea(name, label, type, rows) {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        type={type}
        error={errors[name]}
        rows={rows}
      />
    );
  }
}

export default Form;
