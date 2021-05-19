import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';


import * as selectors from '../../redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';
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
        <DeleteIcon />
      </button>
    </li>
  );
};


ContactsItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: value => dispatch(operations.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);
