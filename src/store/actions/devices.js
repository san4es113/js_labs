import axios from 'axios';
import * as config from '../../config';

export const loadDevice = () => (dispatch) => {
  axios.get(`${config.DEVICE_URL}/devices`)
    .then((response) => {
      const devices = response.data.devices.map((d) => {
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

      // dispatch(saveDeviceToStore([devices]));
    });
};

export const saveDeviceToStore = devices => ({
  type: 'SAVE_DEVICES',
  payload: [...devices],
});
