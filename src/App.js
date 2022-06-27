import { useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import Auth from './components/Authentication/Authentication';
import Counter from './components/Counter/Counter';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Layout className="App">
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Layout>
  );
}

export default App;
