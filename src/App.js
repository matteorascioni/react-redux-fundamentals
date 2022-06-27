import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Counter from './components/Counter/Counter';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Fragment>
        <Header />
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
        <Counter />
      </Fragment>
    </div>
  );
}

export default App;
