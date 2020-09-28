import { createReducer } from '@reduxjs/toolkit';
import { onChangeName, onChangeNumber, onSubmit, onDelete, onFilter, onRestore } from './contactFormActions';
import {
  initialState,
  handleChangeName,
  handleChangeNumber,
  handleDelete,
  handleFilter,
  handleRestore,
  handleSubmit
} from './contactFormHandlers';

// reducers

const reducer = createReducer(initialState, {
  [onChangeName]: handleChangeName,
  [onChangeNumber]: handleChangeNumber,
  [onSubmit]: handleSubmit,
  [onDelete]: handleDelete,
  [onFilter]: handleFilter,
  [onRestore]: handleRestore
});

export default reducer;
