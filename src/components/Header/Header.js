import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/authentication';
import Button from '../Button/Button';

import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={styles.container}>
      {/* Headline */}
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          {/* List */}
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a
                className={styles.listLink}
                href='/'
              >
                My Products
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listLink}
                href='/'
              >
                My Sales
              </a>
            </li>
            <li className={styles.listItem}>
              {/* Button */}
              <Button
                className={styles.button}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
