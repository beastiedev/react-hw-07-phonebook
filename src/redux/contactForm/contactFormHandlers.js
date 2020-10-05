export const initialState = {
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

// reduser's handlers
export const handleChangeName = (state, { payload: name }) => ({ ...state, name });

export const handleChangeNumber = (state, { payload: number }) => ({ ...state, number });

export const handleSubmit = (state, { payload: id }) => {
  if (!state.name) {
    return state;
  }

  if (state.contacts.items.filter((contact) => contact.name === state.name).length) {
    alert(`${state.name} is already in contacts`);
    return state;
  }

  const contact = {
    id: id,
    name: state.name,
    number: state.number
  };
  const contacts = { ...state.contacts, items: [ ...state.contacts.items, contact ] };

  return { ...state, contacts, name: '', number: '', filter: '' };
};

export const handleDelete = (state, { payload: id }) => {
  const delContactsItems = state.contacts.items.filter((item) => item.id !== id);
  const contacts = { ...state.contacts, items: delContactsItems };

  return { ...state, contacts };
};

export const handleFilter = (state, { payload: filter }) => {
  return { ...state, contacts: { ...state.contacts, filter } };
};

export const handleRestore = (state) => {
  return {
    ...state,
    contacts: { ...state.contacts, items: [ ] }
  };
};
