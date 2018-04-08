import React, { Component } from 'react';
import './App.css';
import StartPage from '../containers/StartPage/StartPage';
import Layout from '../containers/Layout/Layout';
import Devices from '../containers/Devices/Devices';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <StartPage/> */}
        <Layout>
          <Devices/>
        </Layout>
      </div>
    );
  }
}

export default App;
