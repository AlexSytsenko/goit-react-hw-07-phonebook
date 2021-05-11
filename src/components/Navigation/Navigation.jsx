import { NavLink } from 'react-router-dom';

import routes from '../../routes'
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav>
    <NavLink
      to={routes.home}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to={routes.contacts}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
