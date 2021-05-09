import { createSelector }  from '@reduxjs/toolkit'

export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;
export const getAllContacts = state => state.contacts.items;

//Мемоизация

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);







// export const getVisibleContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getAllContacts(state);

//   if (!filter) {
//     return contacts;
//   }
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter),
//   );

// };

