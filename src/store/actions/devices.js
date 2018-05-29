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

export const loadDevice = () => (dispatch) => {
  axios.get(`${config.DEVICE_URL}/devices`)
    .then((response) => {
      const devices = response.data.map((d) => {
        if (d) {
          return {
            ...d,
            details: {
              name: 'View details',
              path: `/devices/${d.id}`,
              type: 'link',
            },
          };
        }
      }).filter(it => it);

      dispatch(saveDeviceToStore([devices]));
    });
};

export const loadDevicehistory = id => (dispatch) => {
  axios.get(`${config.DEVICE_URL}/history/device/id/${id}`)
    .then((response) => {
      dispatch(saveDeviceHistoryToStore(id, response.data));
    });
};

