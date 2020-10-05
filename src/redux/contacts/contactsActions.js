import { createAction } from '@reduxjs/toolkit';

export const onFilter = createAction('contacts/filter');

export const changeName = createAction('contacts/change-name');
export const changeNumber = createAction('contacts/change-number');

export const fetchStart = createAction('contacts/fetch/start');
export const fetchSuccess = createAction('contacts/fetch/success');
export const fetchFailure = createAction('contacts/fetch/failure');

export const addStart = createAction('contacts/add/start');
export const addSuccess = createAction('contacts/add/success');
export const addFailure = createAction('contacts/add/failure');

export const deleteStart = createAction('contacts/delete/start');
export const deleteSuccess = createAction('contacts/delete/success');
export const deleteFailure = createAction('contacts/delete/failure');
