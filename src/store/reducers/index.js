import { combineReducers } from 'redux';
import devices from './devices';
import auth from './auth';

const allReducers = combineReducers({
  devices,
  auth
});

export default allReducers;