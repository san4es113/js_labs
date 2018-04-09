const initialState = {
  deviceList:[
    {
      id: '12',
      model:'Nokia',
      battery: '67%',
      signal: '-100dBm',
      locationLng: '12.431',
      locationLat: '23.542'
    },
    {
      id: '13',
      model:'Nokia',
      battery: '67%',
      signal: '-100dBm',
      locationLng: '12.431',
      locationLat: '23.542'
    },
    {
      id: '14',
      model:'Nokia',
      battery: '67%',
      signal: '-100dBm',
      locationLng: '12.431',
      locationLat: '23.542'
    },
    {
      id: '15',
      model:'Nokia',
      battery: '67%',
      signal: '-100dBm',
      locationLng: '12.431',
      locationLat: '23.542'
    },
    {
      id: '16asdawrgdsaaafawraeyhsgfawgedtjsdgsrhfh',
      model:'Nokia',
      battery: '67%',
      signal: '-100dBm',
      locationLng: '12.431',
      locationLat: '23.542'
    }
  ]
}

export default function devices(state = initialState, action) {
  switch (action.type) {
    case "":
    {
      return state;
    }

    default:
    return state;
  }
}
