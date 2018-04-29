import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadDevice } from '../store/actions/devices';
import './App.css';
import Layout from '../containers/Layout/Layout';
import { routes } from './app-routes';


class App extends Component {
  componentDidMount() {
    const that = this;
    this.timer = setInterval(() => {
      that.props.loadDevice();
    }, 15000);
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
