import types from './contactFormTypes';

const initialState = {
  name: '',
  number: '',
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
  }
};

const LOCAL_STORAGE_KEY = 'contactsList';

const storeContacts = (contacts) => {
  contacts.map((item) => delete item.isHidden);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
};

const restoreContacts = () => {
  let contacts = [];
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  }
  return contacts.length ? contacts : initialState.contacts.items;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return { ...state, name: action.payload.name };

    case types.CHANGE_NUMBER:
      return { ...state, number: action.payload.number };

    case types.ADD_CONTACT:
      if (!state.name) {
        return state;
      }

      if (state.contacts.items.filter((contact) => contact.name === state.name).length) {
        alert(`${state.name} is already in contacts`);
        return state;
      }

      const contact = {
        id: action.payload.id,
        name: state.name,
        number: state.number
      };
      const addContactsItems = [ ...state.contacts.items, contact ];
      const addContacts = { ...state.contacts, items: addContactsItems };
      storeContacts(addContactsItems);
      return { ...state, contacts: addContacts, name: '', number: '', filter: '' };

    case types.DELETE_CONTACT:
      const delContactsItems = state.contacts.items.filter((item) => item.id !== action.payload.id);
      const delContacts = { ...state.contacts, items: delContactsItems };
      storeContacts(delContactsItems);
      return { ...state, contacts: delContacts };

    case types.ON_FILTER:
      state.contacts.items.forEach((contact) => {
        if (!new RegExp(`${action.payload.filter}`, 'i').test(contact.name)) {
          contact.isHidden = true;
        } else {
          delete contact.isHidden;
        }
      });
      return {
        ...state,
        contacts: { ...state.contacts, items: [ ...state.contacts.items ], filter: action.payload.filter }
      };

    case types.ON_RESTORE:
      const storedContacts = restoreContacts();
      return {
        ...state,
        contacts: { ...state.contacts, items: [ ...storedContacts ] }
      };

    // case types.ON_STORE:
    //   storeContacts(state.contacts.items);
    //   return state;

    default:
      return state;
  }
};
