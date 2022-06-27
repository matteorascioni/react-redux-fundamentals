import styles from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div 
      className={`
        grid-8--tablet
        grid-10--desktop-small
        grid-8--desktop-large
        grid-offset-1--desktop-small
        grid-offset-2--desktop-large
        ${styles.container}
      `}
    >
      <h2>My User Profile</h2>
    </div>
  );
};

export default UserProfile;
