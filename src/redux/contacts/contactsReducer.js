import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  changeName,
  changeNumber,
  onFilter,
  fetchStart,
  fetchSuccess,
  fetchFailure,
  deleteFailure,
  deleteStart,
  deleteSuccess,
  addSuccess,
  addFailure,
  addStart
} from './contactsActions';

// initial state
const initialState = {
  items: [],
  isLoading: false,
  filter: '',
  form: { name: '', number: '' }
};

// functions

const handleSetContacts = (_, { payload: items }) => items;

const handleAddContact = (items, { payload }) => [ ...items, payload ];

const handleFilter = (_, { payload: filter }) => filter;

const handleChangeName = (form, { payload: name }) => ({ ...form, name });

const handleChangeNumber = (form, { payload: number }) => ({ ...form, number });

const handleDelete = (items, { payload: contactId }) => items.filter(({ id }) => id !== contactId);

// reducers

const filterReducer = createReducer(initialState.filter, {
  [onFilter]: handleFilter
});

const contactsFormReducer = createReducer(initialState.form, {
  [changeName]: handleChangeName,
  [changeNumber]: handleChangeNumber
});

const contactsReducer = createReducer(initialState.items, {
  [fetchSuccess]: handleSetContacts,
  [addSuccess]: handleAddContact,
  [deleteSuccess]: handleDelete
});

const isLoadingReducer = createReducer(initialState.isLoading, {
  [addStart]: () => true,
  [addSuccess]: () => false,
  [addFailure]: () => false,

  [deleteStart]: () => true,
  [deleteSuccess]: () => false,
  [deleteFailure]: () => false,

  [fetchStart]: () => true,
  [fetchSuccess]: () => false,
  [fetchFailure]: () => false
});

export default combineReducers({
  items: contactsReducer,
  form: contactsFormReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer
});
