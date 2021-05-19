import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactsItem from '../ContactItem';
import * as operations from '../../redux/contacts/contacts-operations';
import * as selectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactsList.module.scss';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <ul className={styles.contacts__list}>
       {contacts.map(({ id }) => (
         <ContactsItem key={id} value={id} />
       ))}
     </ul>
    )
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);




//Hook

// import { useDispatch, useSelector } from 'react-redux';

// const ContactsList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectors.getVisibleContacts);

//   useEffect(() => dispatch(operations.fetchContacts()), []);
//   return (
//     <ul className={styles.contacts__list}>
//       {contacts.map(({ id }) => (
//         <ContactsItem key={id} value={id} />
//       ))}
//     </ul>
//   );
// };

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };


// export default ContactsList;







// class ContactsList extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (
//       <ul className={styles.contacts__list}>
//        {this.props.contacts.map(({ id }) => (
//          <ContactsItem key={id} value={id} />
//        ))}
//      </ul>
//     )
//   }
// }