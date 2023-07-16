import { Redirect, Route } from "react-router-dom";
import { userAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = userAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/login" />
  );
}