import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProfider } from '../contexts/AuthContext';
import "../styles/App.css";
import Layout from './Layout';
import PrivetRoute from './PrivetRoute';
import PublicRoute from './PublicRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <AuthProfider>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <PublicRoute exact path='/signup' component={Signup} />
            <PublicRoute exact path='/login' component={Login} />
            <PrivetRoute exact path='/quiz' component={Quiz} />
            <PrivetRoute exact path='/result' component={Result} />
          </Switch>
        </Layout>
      </AuthProfider>
    </Router>
  );
};

export default App;