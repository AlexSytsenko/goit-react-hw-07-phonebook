import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactsItem from '../ContactItem';
import * as operations from '../../redux/contacts/operations';
import * as selectors from '../../redux/contacts/selectors';
import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, fetchContacts }) => {
  useEffect(() => fetchContacts, []);
  return (
    <ul className={styles.contacts__list}>
      {contacts.map(({ id }) => (
        <ContactsItem key={id} value={id} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);






// const getVisibleContacts = (items, filter) => {
//   if (!filter) {
//     return items;
//   }
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return items.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };