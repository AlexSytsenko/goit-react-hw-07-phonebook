import { Switch } from 'react-router-dom';
import { Component } from 'react';
import routes from './routes';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// import Form from './components/Form';
// import ContactsList from './components/ContactsList';
// import FilterContacts from './components/FilterContacts';
// import * as selectors from './redux/contacts/selectors';
import './styles/container.scss';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import authOperations from './redux/auth/auth-operations';

import PrivateRoute from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';




class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  };

  render() {
    return (
      <>
        <AppBar />
        <div className="container">
          <Switch>
            <PublicRouter exact path={routes.home} component={HomeView} />
            <PublicRouter
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />
            <PublicRouter
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
          </Switch>
        </div>
      </>
    );
  }
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);













// const App = ({ loading, error }) => (
//   <div className="container">
//     <h2 className="title title__main">Phonebook</h2>
//     <Form />
//     {loading && <Loader type="Circles" color="#fff" height={75} width={75} />}
//     {error && <h3 className="error">{error}</h3>}
//     <h2 className="title">Contacts</h2>
//     <FilterContacts />
//     <ContactsList />
//   </div>
// );

// App.defaultProps = {
//   loading: false,
//   error: '',
// };

// Form.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.string,
// };

// const mapStateToProps = state => ({
//   loading: selectors.getLoading(state),
//   error: selectors.getError(state),
// });

// export default connect(mapStateToProps)(App);

//before Redax

// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// componentDidUpdate(prevProps, prevState) {
//   const prevContacts = prevState.сontacts;
//   const nextContacts = this.state.contacts;

//   if (prevContacts !== nextContacts) {
//     localStorage.setItem('contacts', JSON.stringify(nextContacts));
//   }
// }

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// formSubmitHandler = ({ name, number }) => {
//   if (!this.isUniqueContact(name)) {
//     alert(`${name} is already in contacts`);
//     return;
//   }
//   const contact = {
//     id: shortid(),
//     name,
//     number,
//   };
//   this.setState(({ contacts }) => ({
//     contacts: [...contacts, contact],
//   }));
// };

// isUniqueContact = name => {
//   const { contacts } = this.state;

//   return !contacts.some(item => item.name === name);
// };

// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getVisibleContacts = () => {
//   const { contacts, filter } = this.state;
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };
