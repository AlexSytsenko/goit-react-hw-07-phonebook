
import { connect } from 'react-redux';
import authSelectors  from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../img/avatar.png';


import styles from './UserMenu.module.scss';


const UserMenu = ({ avatar, name, onLogout }) => {
  console.log(name);
  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>{name}</span>
      <button type="button" onClick={onLogout}>
        Logout
    </button>
    </div>
  )
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

export default connect(mapStateToProps)(UserMenu);