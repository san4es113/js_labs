import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactInterval from 'react-interval';
import { routes } from './app-routes';

import { loadDevice } from '../store/actions/devices';
import Layout from '../containers/Layout/Layout';
import * as config from '../config';
import Spinner from '../components/Spinner/Spinner';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.loadDevice();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {routes}
          <ReactInterval
            timeout={config.SYNC_TIME * 1000}
            enabled
            callback={() => this.props.loadDevice()}
          />
          <Spinner show={this.props.isSpinnerActive} />
        </Layout>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loadDevice: () => dispatch(loadDevice()),
});
const mapStateToProps = state => ({
  isSpinnerActive: state.devices.isSpinnerActive,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
