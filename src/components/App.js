import React from 'react';
import "../styles/App.css";
import Layout from './Layout';
import Result from './pages/Result';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        {/* <Home/> */}
        {/* <Signup/> */}
        {/* <Quiz/> */}
        {/* <Login/> */}
        <Result/>
      </Layout>
    </div>
  );
};

export default App;