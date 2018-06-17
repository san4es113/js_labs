const initialState = {
  deviceList: [],
  currentDeviceHistory: {
    id: '',
    history: [],
  },
  isSpinnerActive: false,
};

export default function devices(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DEVICES':
    {
      return {
        ...state,
        deviceList: [...action.payload[0]],
        isSpinnerActive: false,
      };
    }
    case 'SAVE_HISTORY':
    {
      const devicesL = { ...state.deviceList };

      for (const i of state.deviceList) {
        if (action.payload.history[0].id === i.id) {
          i.status = action.payload.history[0].status;
          i.battery = action.payload.history[0].battery;
          i.lastSync = action.payload.history[0].lastSync;
          i.location = { ...action.payload.history[0].location };
        }
        console.log(action.payload.history[0]);
      }
      return {
        ...state,
        deviceList: devicesL,
        isSpinnerActive: false,
        currentDeviceHistory: { ...action.payload },
      };
    }
    case 'ACTIVATE_SPINNER':
    {
      return {
        ...state,
        isSpinnerActive: true,
      };
    }
    default:
      return state;
  }
}
