const initialState = {
  deviceList: [
    {
      id: '123qwesffhflsgksnd;gidfjkdfgnkdjgsnldgkndlgksgngjk',
      status: 'connected',
      model: 'nokia',
      type: 'android',
      battery: '12%',
      signal: '-100dBm',
      lastSync: '1524352898629',
      location: {
        lat: '12.3123',
        lng: '34.124',
      },
      details: {
        name: 'View details',
        path: '/devices/Android14',
        type: 'link',
      },
      history: [
        {
          time: '15243528456629',
          location: {
            lat: '15.3123',
            lng: '24.124',
          },
          signal: '-10dBm',
          battery: '31%',
        },
        {
          time: '1524352877629',
          location: {
            lat: '12.3123',
            lng: '34.124',
          },
          signal: '-17dBm',
          battery: '33%',
        },
        {
          time: '1524357795629',
          location: {
            lat: '12.3123',
            lng: '34.124',
          },
          signal: '-12dBm',
          battery: '33%',
        },
        {
          time: '1524352899929',
          location: {
            lat: '12.3123',
            lng: '34.124',
          },
          signal: '-12dBm',
          battery: '33%',
        },
      ],
    },
  ],
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

    default:
      return state;
  }
}
