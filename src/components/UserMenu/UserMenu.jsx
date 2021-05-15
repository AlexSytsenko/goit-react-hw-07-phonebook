
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import PropTypes from 'prop-types';

import defaultAvatar from '../../img/avatar.png';
import styles from './UserMenu.module.scss';


const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.container}>
      <img
        src={avatar}
        alt="user avatar"
        width="32"
        className={styles.avatar}
      />
      <span className={styles.name}>Welcome, {name}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

UserMenu.defaultProps = {
  avatar: defaultAvatar,
};

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.any,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);