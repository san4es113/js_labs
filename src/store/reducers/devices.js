const initialState = {
  deviceList:[
    {
      id: '120',
      type: 'android',
      status: 'connected',
      lastSync: '1523718098999',
      details: {
        name: 'View details',
        path: '/devices/Android14',
        type: 'link'
      } 
    },
    {
      id: '121',
      type: 'android',
      status: 'connected',
      lastSync: '1523718000009',
      details: {
        name: 'View details',
        path: '/devices/Android13',
        type: 'link'
      } 
    },
    {
      id: '122',
      type: 'android',
      status: 'connected',
      lastSync: '1523631698999',
      details: {
        name: 'View details',
        path: '/devices/Android15',
        type: 'link'
      } 
    },
    {
      id: '125',
      type: 'windows',
      status: 'connected',
      lastSync: '1523718000009',
      details: {
        name: 'View details',
        path: '/devices/Android13',
        type: 'link'
      } 
    },
    {
      id: '126',
      type: 'windows',
      status: 'disconnected',
      lastSync: '1523718000009',
      details: {
        name: 'View details',
        path: '/devices/Android13',
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
