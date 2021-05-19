import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from '../../redux/contacts/contacts-operations';
import selectors from '../../redux/contacts/contacts-selectors';
import styles from './Form.module.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeForm = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (this.isUniqueContact()) {
      const message = `${name} is already in contacts.`;

      return toast.warning(message);
    }

    const newContact = {
      name,
      number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };

  isUniqueContact() {
    const { name } = this.state;
    const { contacts } = this.props;
    return contacts.find(contact => contact.name === name);
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
            value={name}
            onChange={this.handleChangeForm}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
            required
            value={number}
            onChange={this.handleChangeForm}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
