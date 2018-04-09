import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Layout from '../containers/Layout/Layout';
import { getRoutes } from './app-routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {getRoutes(this.props.isUserPresent)}
        </Layout>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    isUserPresent: state.auth.isUserPresent,
  }
}
export default connect(mapStateToProps)(App);
