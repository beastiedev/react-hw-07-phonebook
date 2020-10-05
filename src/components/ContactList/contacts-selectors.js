import { createSelector } from 'reselect';

export const getFilter = (state) => state.contacts.filter;

export const isContactsLoading = (state) => state.contacts.isLoading;

const getItems = (state) => state.contacts.items;
export const getContacts = createSelector([ getItems ], (items) => items);
