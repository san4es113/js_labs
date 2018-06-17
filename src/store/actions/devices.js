import axios from 'axios';
import * as config from '../../config';

const saveDeviceToStore = devices => ({
  type: 'SAVE_DEVICES',
  payload: [...devices],
});
const saveDeviceHistoryToStore = (id, history) => ({
  type: 'SAVE_HISTORY',
  payload: {
    id,
    history,
  },
});
const activateSpinner = () => ({
  type: 'ACTIVATE_SPINNER',
});

export const loadDevicehistory = id => (dispatch) => {
  axios.get(`${config.DEVICE_URL}/history/get/id/${id}`)
    .then((response) => {
      dispatch(saveDeviceHistoryToStore(id, response.data));
    });
};

export const loadDevice = () => (dispatch) => {
  dispatch(activateSpinner());
  axios.get(`${config.DEVICE_URL}/devices`)
    .then((response) => {
      const devices = response.data.map((d) => {
        if (Object.keys(d).length) {
          const device = {
            ...d,
            lastSync: +d.lastSync,
            details: {
              name: 'View details',
              path: `/devices/${d.id}`,
              type: 'link',
            },
          };
          axios.get(`${config.DEVICE_URL}/history/get/id/${d.id}`)
            .then((res) => {
              const index = res.data.length - 1;
              device.status = res.data[index].status;
              device.battery = res.data[index].battery;
              device.location = { ...res.data[index].location };
              device.signal = res.data[index].signal;
            });
          return device;
        }
      });
      dispatch(saveDeviceToStore([devices]));
    });
};

