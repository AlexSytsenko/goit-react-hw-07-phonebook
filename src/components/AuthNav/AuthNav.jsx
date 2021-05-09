import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import styles from './AuthNav.module.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.register}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
