import { createAction } from '@reduxjs/toolkit';

export const onSubmit = createAction('contacts/submit');
export const onChangeName = createAction('contacts/change-name');
export const onChangeNumber = createAction('contacts/change-number');
export const onDelete = createAction('contacts/delete');
export const onFilter = createAction('contacts/filter');
export const onRestore = createAction('contacts/restore');
