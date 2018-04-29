import { combineReducers } from 'redux';
import devices from './devices';

const allReducers = combineReducers({
  devices,
});

export default allReducers;
