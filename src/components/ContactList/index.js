import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { onDelete } from '../../redux/contactForm/contactFormActions';

const ContactList = ({ items, onDelete }) => {
  return (
    <ul className="contact-list">
      {items.map((item) => {
        return !item.isHidden && <ContactItem key={item.id} item={item} onDelete={() => onDelete(item.id)} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([ PropTypes.string ]),
      name: PropTypes.string
    })
  )
};

ContactList.defaultProps = {
  contacts: []
};

const mapStateToProps = (state) => ({
  items: state.contactForm.contacts.items,
  filter: state.contactForm.contacts.filter
});

export default connect(mapStateToProps, { onDelete })(ContactList);
