import React from 'react';
import "../styles/App.css";
import Layout from './Layout';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        {/* <Home/> */}
        <Signup/>
        {/* <Login/> */}
      </Layout>
    </div>
  );
};

export default App;