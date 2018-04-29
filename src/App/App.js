import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from '../containers/Layout/Layout';
import { routes } from './app-routes';

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
