import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const initialState = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};

const items = createReducer(initialState.items, {

  [fetchContactsSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({id}) => id !== payload),
});

const loading = createReducer(initialState.loading, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(initialState.error, {
  [addContactError]: setError,
  [deleteContactError]: setError,
  [fetchContactsError]: setError,
});


const filter = createReducer(initialState.filter, {
  [changeFilter]: (_, { payload }) => payload,
});


const contactsReducer = combineReducers({
  items,
  loading,
  error,
  filter,
});

export default contactsReducer;

