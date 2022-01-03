import classes from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {authActions} from '../store';
const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const loginHandler = () => {
    return dispatch(authActions.login());
  };
  const logoutHandler = () => {
    return dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {!isAuth
              ? <button onClick={loginHandler}>Login</button>
              : <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
