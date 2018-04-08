import React, { Component } from 'react';
import './App.css';
import StartPage from '../containers/StartPage/StartPage';
import Layout from '../containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <StartPage/> */}
        <Layout>content</Layout>
      </div>
    );
  }
}

export default App;
