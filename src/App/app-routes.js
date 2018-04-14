import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Devices from '../containers/Devices/Devices';
import DeviceMap from '../containers/Map/DeviceMap';

export const routes = (
      <Switch>
        <Route path="/devices" exact component = {Devices}/>
        <Route path="/device-map" exact component = {DeviceMap}/>
        <Route path="/devices/:id" exact component = {Devices}/>
      </Switch>
);


