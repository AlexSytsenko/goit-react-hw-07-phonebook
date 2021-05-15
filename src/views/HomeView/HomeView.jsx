import styles from './HomeView.module.scss';



const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Create your phonebook</h1>
    <p className={styles.text}>
      On this page, you can create your own phone book with contacts that you
      can add and remove.
    </p>
  </div>
);

export default HomeView;
