import types from './contactFormTypes';

export const onSubmit = (id) => ({ type: types.ADD_CONTACT, payload: { id } });
export const onChangeName = (name) => ({ type: types.CHANGE_NAME, payload: { name } });
export const onChangeNumber = (number) => ({ type: types.CHANGE_NUMBER, payload: { number } });
export const onDelete = (id) => ({ type: types.DELETE_CONTACT, payload: { id } });
export const onFilter = (filter) => ({ type: types.ON_FILTER, payload: { filter } });
