import React from 'react';
import { Component } from 'react';
import { v4 as uuid_v4 } from "uuid";

class ContactForm extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name) {
            return;
        }
        this.props.onSubmit({
            id: uuid_v4(),
            name: this.state.name,
        });

        this.setState({ name: '' });
    }

    handleInputChange = (e) => this.setState({ name: e.target.value });

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <p>Name</p>
                <p><input
                    name="name"
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                /></p>
                <p><button>Add contact</button>
                </p>
            </form>
        )
    }
};

export default ContactForm;