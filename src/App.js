import { Switch } from 'react-router-dom';
import { Component, Suspense, lazy } from 'react';
import routes from './helpers/routes';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import './styles/container.scss';
import AppBar from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';
import selectors from './redux/auth/auth-selectors';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "Home-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "Contacts-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "Login-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "Register-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <>
        <AppBar />
        <ToastContainer />
        <div className="container">
          {isLoading && (
            <Loader type="Puff" color="#C48613" height={75} width={75} />
          )}
          <Suspense
            fallback={
              <Loader type="Puff" color="#C48613" height={75} width={75} />
            }
          >
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
                path={routes.home}
                component={ContactsView}
                redirectTo={routes.login}
              />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

App.propTypes = {
  onGetCurrentUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: selectors.getIsLoading(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
