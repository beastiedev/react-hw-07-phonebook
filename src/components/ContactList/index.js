import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { fetchContacts, deleteContact } from '../../redux/contacts/contactsApi';

const ContactList = ({ contacts, filter, isLoading, deleteContact, fetchContacts }) => {
  const filteredItems = () => {
    return contacts.filter((item) => new RegExp(`${filter}`, 'i').test(item.name));
  };

  useEffect(
    () => {
      fetchContacts();
    },
    [ fetchContacts ]
  );

  return (
    <Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="contact-list">
          {filteredItems().map((item) => {
            return <ContactItem key={item.id} item={item} onDelete={() => deleteContact(item.id)} />;
          })}
        </ul>
      )}
    </Fragment>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([ PropTypes.string ]),
      name: PropTypes.string
    })
  )
};

ContactList.defaultProps = {
  contacts: []
};

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.contacts,
  filter: contacts.filter,
  isLoading: contacts.isLoading
});

const mapDispatchToProps = {
  deleteContact,
  fetchContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
