import classes from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../store';
import UserProfile from './UserProfile';
import {Fragment} from 'react';
const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = e => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  const isAuth = useSelector(state => {
    return state.auth.isAuthenticated;
  });

  return (
    <Fragment>
      {!isAuth
        ? <main className={classes.auth}>
            <section>
              <form>
                <div className={classes.control}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div className={classes.control}>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <button onClick={loginHandler}>Login</button>
              </form>
            </section>
          </main>
        : <UserProfile />}
    </Fragment>
  );
};

export default Auth;
