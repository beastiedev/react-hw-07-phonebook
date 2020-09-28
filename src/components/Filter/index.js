import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onFilter } from '../../redux/contactForm/contactFormActions';

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

const mapStateToProps = (state) => ({
  filter: state.contactForm.contacts.filter
});

export default connect(mapStateToProps, { onFilter })(Filter);
