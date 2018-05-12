import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from './app-routes';

import { loadDevice } from '../store/actions/devices';
import Layout from '../containers/Layout/Layout';
import * as config from '../config';
import './App.css';

class App extends Component {
  componentDidMount() {
    const that = this;
    that.props.loadDevice();
    this.timer = setInterval(() => {
      that.props.loadDevice();
    }, config.SYNC_TIME * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
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
const mapDispatchToProps = dispatch => ({
  loadDevice: () => dispatch(loadDevice()),
});
export default connect(null, mapDispatchToProps)(App);
