import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, onDelete }) => (
    <>
        <ul className="contact-list">
            {contacts.map((item) => (
                <ContactItem key={item.id} item={item} onDelete={onDelete} />
            ))}
        </ul>
    </>
);



ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string]),
            name: PropTypes.string,
        })
    )
}

ContactList.defaultProps = {
    contacts: []
}


export default ContactList;