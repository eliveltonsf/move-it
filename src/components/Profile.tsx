import { useContext } from 'react';
import { ChallengesContext } from 'contexts/ChallengesContext';
import styles from 'styles/components/Profile.module.css';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eliveltonsf.png" alt="Elivelton Ferreira" />
      <div>
        <strong>Elivelton Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
