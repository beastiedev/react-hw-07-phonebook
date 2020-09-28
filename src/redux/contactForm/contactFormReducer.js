import { createReducer } from '@reduxjs/toolkit';
import { onChangeName, onChangeNumber, onSubmit, onDelete, onFilter, onRestore } from './contactFormActions';
import {
  handleChangeName,
  handleChangeNumber,
  handleSubmit,
  handleDelete,
  handleFilter,
  handleRestore,
  initialState
} from './contactFormHandlers';

const reducer = createReducer(initialState, {
  [onChangeName]: handleChangeName,
  [onChangeNumber]: handleChangeNumber,
  [onSubmit]: handleSubmit,
  [onDelete]: handleDelete,
  [onFilter]: handleFilter,
  [onRestore]: handleRestore
});

export default reducer;
