import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Layout from '../containers/Layout/Layout';
import { routes } from './app-routes';
import Devices from '../containers/Devices/Devices';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
         {routes}
        </Layout>
      </BrowserRouter>
    );
  }
}
export default App;
