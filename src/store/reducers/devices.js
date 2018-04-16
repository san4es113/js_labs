const initialState = {
  deviceList:[],
}

export default function devices(state = initialState, action) {
  switch (action.type) {
    case "SAVE_DEVICES":
    {

      return {
        ...state,
        deviceList:[...action.payload[0]]
      };
    }

    default:
    return state;
  }
}
