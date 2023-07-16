import React from 'react';
import { Link } from 'react-router-dom';
import { userAuth } from '../contexts/AuthContext';
import classes from "../styles/Account.module.css";


export const Account = () => {

  const { currentUser, logout } = userAuth();

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>      logout
          </span>
        </>
      ) : (
        <>
          <Link to="signup">Signup</Link>
          <Link to="login">Login</Link>
        </>
      )}
    </div>
  )
}
