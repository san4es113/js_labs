const initialState = {
  deviceList: [],
  currentDeviceHistory: {
    id: '',
    history: [],
  },
};

export default function devices(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DEVICES':
    {
      return {
        ...state,
        deviceList: [...action.payload[0]],
      };
    }
    case 'SAVE_HISTORY':
    {
      const devicesL = { ...state.deviceList };
      for (let i of state.deviceList) {
        console.log(action.payload.history[0])
        if (action.payload.history[0].id === i.id) {
        i.status = action.payload.history[0].status;
        i.battery = action.payload.history[0].battery;
        i.lastSync = action.payload.history[0].lastSync;
        i.location = { ...action.payload.history[0].location };
        }
        console.log(action.payload.history[0]);
      }
      // if (index !== -1) {
      //   devicesL[index].history = { ...action.payload };
      //   devicesL[index].status = action.payload[0].status;
      //   devicesL[index].lastSync = action.payload[0].lastSync;
      //   devicesL[index].position = { ...action.payload[0].position };
      // }
      return {
        ...state,
        deviceList: devicesL,
        currentDeviceHistory: { ...action.payload },
      };
    }
    default:
      return state;
  }
}
