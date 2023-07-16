import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProfider } from '../contexts/AuthContext';
import "../styles/App.css";
import Layout from './Layout';
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
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/quiz' component={Quiz} />
            <Route exact path='/result' component={Result} />
          </Switch>
        </Layout>
      </AuthProfider>
    </Router>
  );
};

export default App;