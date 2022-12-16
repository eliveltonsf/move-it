import styles from '../styles/components/Profile.module.css';
const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eliveltonsf.png" alt="Elivelton Ferreira" />
      <div>
        <strong>Elivelton Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
