import { Switch } from 'react-router-dom';
import { Component, Suspense, lazy } from 'react';
import routes from './routes';
import { connect } from 'react-redux';

import './styles/container.scss';
import AppBar from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';

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
    return (
      <>
        <AppBar />
        <div className="container">
          <Suspense fallback={<p>Загружаем...</p>}>
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
          </Suspense>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);