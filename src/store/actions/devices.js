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

export const loadDevicehistory = id => (dispatch) => {
  axios.get(`${config.DEVICE_URL}/history/get/id/${id}`)
    .then((response) => {
      dispatch(saveDeviceHistoryToStore(id, response.data));
    });
};

export const loadDevice = () => (dispatch) => {
  axios.get(`${config.DEVICE_URL}/devices`)
    .then((response) => {
      const devices = response.data.map((d) => {
        console.log(d);
        if (Object.keys(d).length) {
          const device = {
            ...d,
            lastSync: +d.lastSync,
            details: {
              name: 'View details',
              path: `/devices/${d.id}`,
              type: 'link',
            }
          };
          axios.get(`${config.DEVICE_URL}/history/get/id/${d.id}`)
            .then((res) => {
              device.status = res.data[0].status,
              device.battery = res.data[0].battery,
              device.location = { ...res.data[0].location };
              device.signal = res.data[0].signal;
            });
          return device;
        }
      });
      dispatch(saveDeviceToStore([devices]));
    });
};

