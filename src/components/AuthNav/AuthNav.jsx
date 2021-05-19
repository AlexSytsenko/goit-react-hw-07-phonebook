import { NavLink } from 'react-router-dom';

import routes from '../../helpers/routes';
import styles from './AuthNav.module.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.register}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
