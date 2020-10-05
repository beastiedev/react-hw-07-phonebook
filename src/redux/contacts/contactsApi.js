import { getContacts, removeContact, createContact } from '../../api/contacts';
import {
  fetchStart,
  fetchFailure,
  fetchSuccess,
  deleteSuccess,
  deleteFailure,
  deleteStart,
  addStart,
  addFailure,
  addSuccess,
  changeName,
  changeNumber
} from './contactsActions';

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchStart());
  getContacts().then((contacts) => dispatch(fetchSuccess(contacts))).catch((error) => dispatch(fetchFailure(error)));
};

export const addContact = (newContact) => (dispatch, getState) => {
  dispatch(addStart());
  const { contacts } = getState();

  if (!newContact.name) {
    return dispatch(addFailure('name is empty'));
  }

  if (contacts.contacts.filter((contact) => contact.name === newContact.name).length) {
    alert(`${newContact.name} is already in contacts`);
    return dispatch(addFailure('name is already in contacts'));
  }

  createContact(newContact)
    .then((res) => {
      dispatch(addSuccess(res));
      dispatch(changeName(''));
      dispatch(changeNumber(''));
    })
    .catch((error) => dispatch(addFailure(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteStart());
  removeContact(id).then(() => dispatch(deleteSuccess(id))).catch((error) => dispatch(deleteFailure(error)));
};
