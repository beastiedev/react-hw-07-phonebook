import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onFilter } from '../../redux/contacts/contactsActions';

const Filter = ({ filter, onFilter }) => {
  return (
    <Fragment>
      <div>Find contacts by name</div>
      <input type="text" name="filter" value={filter} onChange={(e) => onFilter(e.target.value)} />
    </Fragment>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter
});

export default connect(mapStateToProps, { onFilter })(Filter);
