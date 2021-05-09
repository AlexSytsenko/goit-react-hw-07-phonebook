import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '../../redux/contacts/selectors';
import * as operations from '../../redux/contacts/operations';
import styles from './ContactItem.module.scss';

const ContactsItem = ({ contacts, value, onDeleteContact }) => {
  const contact = contacts.filter(item => item.id === value)[0];
  const { name, number } = contact;

  return (
    <li className={styles.contact__item}>
      <p className={styles.contact__text}>
        {name}: {number}
      </p>
      <button
        className={styles.contact__button}
        type="button"
        onClick={() => onDeleteContact(value)}
      >
        Delete
      </button>
    </li>
  );
};

ContactsItem.defaultProps = {
  contacts: [],
};

ContactsItem.propTypes = {
  contacts: PropTypes.array,
  value: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: value => dispatch(operations.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);
