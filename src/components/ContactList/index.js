import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({ items, filter, isLoading, deleteContact, fetchContacts }) => {
  const filteredItems = () => {
    return items.filter((item) => new RegExp(`${filter}`, 'i').test(item.name));
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
  fetchContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([ PropTypes.string ]),
      name: PropTypes.string
    })
  )
};

ContactList.defaultProps = {
  items: []
};

export default ContactList;
