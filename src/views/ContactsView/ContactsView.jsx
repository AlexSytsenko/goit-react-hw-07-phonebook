import styles from './ContactsView.module.scss';
import Form from '../../components/Form';
import FilterContacts from '../../components/FilterContacts';
import ContactsList from '../../components/ContactsList';

const ContactsView = () => (
  <>
    <h2 className="title title__main">Phonebook</h2>
    <Form />
    <h2 className="title">Contacts</h2>
    <FilterContacts />
    <ContactsList />
  </>
);

export default ContactsView;
