const initialState = {
  deviceList:[
    {
      id: '12',
      type: 'Android',
      status: 'Connected',
      lastSync: 'five days ago',
      details: {
        name: 'View details',
        path: '/devices/Android14',
        type: 'link'
      } 
    },
    {
      id: '12',
      type: 'Android',
      status: 'Connected',
      lastSync: 'five days ago',
      details: {
        name: 'View details',
        path: '/devices/Android13',
        type: 'link'
      } 
    },
    {
      id: '12',
      type: 'Android',
      status: 'Connected',
      lastSync: 'five days ago',
      details: {
        name: 'View details',
        path: '/devices/Android15',
        type: 'link'
      } 
    },
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
