import axios from 'axios';

export const loadDevice = () => {
  return dispatch => {
    axios.get('http://34.217.100.230/api/devices')
    .then((response) => {
      const devices = response.data.devices.map((d) => {
        if(d){
        return {
          ...d,
          details: {
            name: 'View details',
            path: `/devices/${d.id}`,
            type: 'link'
          }
        }
      }
      }).filter((it)=>it);
      
      dispatch(saveDeviceToStore([devices]));
    })
    .catch(err=>console.log(err));
  }
}

const saveDeviceToStore = (devices) => {
  return{
    type: 'SAVE_DEVICES',
    payload: [...devices]
  }
}