import React from 'react';
import "../styles/App.css";
import Layout from './Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;