import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Devices from '../containers/Devices/Devices';
import StartPage from '../containers/StartPage/StartPage';
import DeviceMap from '../containers/Map/DeviceMap';

export const getRoutes = isUserPresent => {
  if(!isUserPresent){
    return (
      <Switch>
        <Route path = "/" exact render = {() => <StartPage show = {true}/> } />
        <Redirect to = "/"/> 
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/devices" exact component = {Devices}/>
        <Route path="/device-map" exact component = {DeviceMap}/>
        <Redirect to="/devices" />
      </Switch>
    );
  }
}


