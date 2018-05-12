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
      return {
        ...state,
        currentDeviceHistory: { ...action.payload },
      };
    }
    default:
      return state;
  }
}
