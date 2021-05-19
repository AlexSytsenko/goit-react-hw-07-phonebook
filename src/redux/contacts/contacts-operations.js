import axios from 'axios';
import { toast } from 'react-toastify';
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
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const response = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    toast.error(error.message);
    dispatch(fetchContactsError(error.message));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const response = await axios.post('/contacts', contact);

    dispatch(addContactSuccess(response.data));
  } catch (error) {
    toast.error(error.message);
    dispatch(addContactError(error.message));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteContactError(error.message));
  }
};
