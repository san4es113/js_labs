import React, { Component } from 'react';
import './App.css';
import Layout from '../containers/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import { getRoutes } from './app-routes';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isUserAuth: true
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {getRoutes(this.state.isUserAuth)}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
