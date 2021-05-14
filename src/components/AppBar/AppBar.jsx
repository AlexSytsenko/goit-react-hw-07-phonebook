import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.scss';
import authSelectors from '../../redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);