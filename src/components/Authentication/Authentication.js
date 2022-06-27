import { useDispatch } from 'react-redux'
import { authActions } from '../../store/authentication'
import Button from '../Button/Button';

import styles from './Authentication.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
     
    dispatch(authActions.login());
  }

  return (
    <section
       className={`
        grid-8--tablet
        grid-10--desktop-small
        grid-8--desktop-large
        grid-offset-1--desktop-small
        grid-offset-2--desktop-large
        ${styles.container}
      `}
    >
      {/* Form */}
      <form onSubmit={loginHandler}>
        {/* Control */}
        <div className={styles.control}>
          <label
            className={styles.label}
            htmlFor='email'
          >
            Email
          </label>
          <input
            className={styles.input}
            type='email' id='email' 
          />
        </div>
        {/* Control */}
        <div className={styles.control}>
          <label
            className={styles.label}
            htmlFor='password'
          >
            Password
          </label>
          <input 
            className={styles.input}
            type='password'
            id='password'
          />
        </div>
        <Button>Login</Button>
      </form>
    </section>
  );
};

export default Auth;
