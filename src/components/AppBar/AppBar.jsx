import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.scss';

const AppBar = () => (
  <header style={styles.header}>
    <Navigation />
    <AuthNav />
  </header>
);

export default AppBar;