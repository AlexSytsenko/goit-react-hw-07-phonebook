import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  clearContactsError,
} from './actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const response = await axios.get('/contacts');

    
    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};


export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

   try {
    const response = await axios.post('/contacts', contact);

    
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }

};


export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    
    dispatch(deleteContactSuccess(response.data));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
