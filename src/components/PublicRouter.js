import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authSelectors from '../redux/auth/auth-selectors';


/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PublicRoute.defaultProps = {
  redirectTo: null,
  routeProps: null,
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
  routeProps: PropTypes.any,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
