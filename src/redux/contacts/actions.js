import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('conatacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('conatacts/fetchContactsSuccess');
export const fetchContactsError = createAction('conatacts/fetchContactsError');

export const addContactRequest = createAction('conatacts/addContactRequest');
export const addContactSuccess = createAction('conatacts/addContactSuccess');
export const addContactError = createAction('conatacts/addContactError');

export const deleteContactRequest = createAction('conatacts/deleteContactRequest');
export const deleteContactSuccess = createAction('conatacts/deleteContactSuccess');
export const deleteContactError = createAction('conatacts/deleteContactError');

export const changeFilter = createAction('conatacts/filter');
export const clearContactsError = createAction('conatacts/clearContactsError');











//Redux
// import * as types from './types';

// export const addContact = value => ({
//   type: types.ADD,
//   payload: value,
// });

// export const deleteContact = value => ({
//   type: types.DELETE,
//   payload: value,
// });

// export const filterContacts = value => ({
//   type: types.FILTER,
//   payload: value,
// });