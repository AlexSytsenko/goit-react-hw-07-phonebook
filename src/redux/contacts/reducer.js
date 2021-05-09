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
  clearContactsError,
} from './actions';

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

const error = createReducer(initialState.error, {
  [addContactError]: (_, { payload }) => payload.message,
  [deleteContactError]: (_, { payload }) => payload.message,
  [fetchContactsError]: (_, { payload }) => payload.message,
  [clearContactsError]: () => null,
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







//Redux

// import { combineReducers } from 'redux';

// import * as types from './types';

// const initialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// const itemsReducer = (state = initialState.items, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialState.filter, { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;
