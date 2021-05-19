import styles from './ContactsView.module.scss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../../components/Form';
import FilterContacts from '../../components/FilterContacts';
import ContactsList from '../../components/ContactsList';
import selectors from '../../redux/contacts/contacts-selectors';

const ContactsView = ({ isLoading }) => (
  <>
    <h2 className="title title__main">Phonebook</h2>
    <Form />
    {isLoading && <Loader type="Puff" color="#C48613" height={75} width={75} />}
    <h2 className="title">Contacts</h2>
    <FilterContacts />
    <ContactsList />
  </>
);

ContactsView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  isLoading: selectors.getLoading(state),
});

export default connect(mapStateToProps)(ContactsView);
