import React from 'react';
import { v4 as uuid_v4 } from 'uuid';
import { connect } from 'react-redux';
import * as contactFormActions from '../../redux/contactForm/contactFormActions';

const ContactForm = ({ name, number, onSubmit, onChangeName, onChangeNumber }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(uuid_v4());
  };

  return (
    <form className="contact-form" onSubmit={handleOnSubmit}>
      <p>Name</p>
      <p>
        <input name="name" type="text" onChange={(e) => onChangeName(e.target.value)} value={name} />
      </p>
      <p>Number</p>
      <p>
        <input name="number" type="text" onChange={(e) => onChangeNumber(e.target.value)} value={number} />
      </p>
      <p>
        <button>Add contact</button>
      </p>
    </form>
  );
};

const mapStateToProps = (state) => ({
  name: state.contactForm.name,
  number: state.contactForm.number
});

export default connect(mapStateToProps, contactFormActions)(ContactForm);
