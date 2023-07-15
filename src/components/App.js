import React from 'react';
import "../styles/App.css";
import Layout from './Layout';
import Login from './pages/Login';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        {/* <Home/> */}
        {/* <Signup/> */}
        {/* <Quiz/> */}
        <Login/>
      </Layout>
    </div>
  );
};

export default App;