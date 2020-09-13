import React from "react";
import { Component } from "react";
import { v4 as uuid_v4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      return;
    }
    this.props.onSubmit({
      id: uuid_v4(),
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({ name: "", number: "" });
  };

  handleNameInputChange = (e) => this.setState({ name: e.target.value });

  handleNumberInputChange = (e) => this.setState({ number: e.target.value });

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <p>Name</p>
        <p>
          <input
            name="name"
            type="text"
            onChange={this.handleNameInputChange}
            value={this.state.name}
          />
        </p>
        <p>Number</p>
        <p>
          <input
            name="number"
            type="text"
            onChange={this.handleNumberInputChange}
            value={this.state.number}
          />
        </p>
        <p>
          <button>Add contact</button>
        </p>
      </form>
    );
  }
}

export default ContactForm;
