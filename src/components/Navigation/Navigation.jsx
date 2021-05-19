import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../../helpers/routes'
import styles from './Navigation.module.scss';
import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to={routes.home}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
