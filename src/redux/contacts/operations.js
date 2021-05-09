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

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};


export const addContact = contact => dispatch => {
  const { name } = contact;
  const massege = { message: `${name} is already in contacts` };

  dispatch(clearContactsError());

  dispatch(addContactRequest());

  axios
    .get(`/contacts?q=${name}`)
    .then(({ data }) => {
      if (data.length > 0) {
        dispatch(addContactError(massege));
        return;
      }
      axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
    
    })
    .catch(error => dispatch(fetchContactsError(error)));
};


export const deleteContact = contactId => dispatch => {
  dispatch(clearContactsError());
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};
