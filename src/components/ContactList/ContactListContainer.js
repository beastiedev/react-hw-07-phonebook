import { connect } from 'react-redux';
import ContactList from './';
import { getContacts, getFilter, isContactsLoading } from './contacts-selectors';
import { fetchContacts, deleteContact } from '../../redux/contacts/contactsApi';

const mapStateToProps = (state) => ({
  items: getContacts(state),
  filter: getFilter(state),
  isLoading: isContactsLoading(state)
});

const mapDispatchToProps = {
  deleteContact,
  fetchContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
