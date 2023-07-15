import React from 'react'
import { Link } from 'react-router-dom'
import classes from "../styles/Account.module.css"
export const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>0
      <Link to="signup">Signup</Link>
      <Link to="login">Login</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  )
}
