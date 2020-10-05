import React from 'react';
import { v4 as uuid_v4 } from 'uuid';
import { connect } from 'react-redux';
import { changeName, changeNumber } from '../../redux/contacts/contactsActions';
import { addContact } from '../../redux/contacts/contactsApi';

const ContactForm = ({ name, number, addContact, changeName, changeNumber }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addContact({
      id: uuid_v4(),
      name,
      number
    });
  };

  return (
    <form className="contact-form" onSubmit={handleOnSubmit}>
      <p>Name</p>
      <p>
        <input name="name" type="text" onChange={(e) => changeName(e.target.value)} value={name} />
      </p>
      <p>Number</p>
      <p>
        <input name="number" type="text" onChange={(e) => changeNumber(e.target.value)} value={number} />
      </p>
      <p>
        <button>Add contact</button>
      </p>
    </form>
  );
};

const mapStateToProps = ({ contacts }) => ({
  name: contacts.form.name,
  number: contacts.form.number
});

const mapDispatchToProps = {
  addContact,
  changeName,
  changeNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
