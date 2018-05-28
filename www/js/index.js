var mobileDevice = {
  imei: '',
  battery: 0,
  signal: 0,
  type: '',
  model: '',
  location: {
    lng: 0,
    lat: 0,
    height: 0
  },
};
var serverEndpoint = '';
var isProgramSendData = true;

var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  
  
  onDeviceReady: function() {
    this.receivedEvent('deviceready');  
    cordova.plugins.backgroundMode.setEnabled(true);
    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(status) {
      mobileDevice.battery = status.level;
    };
    
    function showData() {
      document.getElementById('span-imei').innerText = mobileDevice.imei;
      document.getElementById('span-battery').innerText = mobileDevice.battery  + "%";
      document.getElementById('span-signal').innerText = mobileDevice.signal + " dBm";
      document.getElementById('span-lng').innerText = mobileDevice.location.lng;
      document.getElementById('span-lat').innerText = mobileDevice.location.lat;
      document.getElementById('span-height').innerHTML = mobileDevice.location.height + " m";
    };

    function getIMEICode() {
      cordova.plugins.IMEI(function (err, imei) {
        mobileDevice.imei = imei;
      });
    };
    function getSignal() {
      window.SignalStrength.dbm(
        function(measuredDbm){
          if(measuredDbm && measuredDbm < -1 ) mobileDevice.signal = measuredDbm;
        });
    };
      
      function getLocation() {
        var onSuccess = function(position) {
          mobileDevice.location.lat = position.coords.latitude;
          mobileDevice.location.lng = position.coords.longitude;
          mobileDevice.location.height = position.coords.altitude || '~ ';
        };
        function onError(error) {
          alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }
      function sendData(){
        if(!isProgramSendData || !serverEndpoint) return;
        fetch(serverEndpoint + "/api/device", {
          method: 'post',
          body: JSON.stringify({
            id: mobileDevice.imei,
            type: mobileDevice.type,
            model: mobileDevice.model,
            lastSync: new Date(),
            signal: mobileDevice.signal,
            battery: mobileDevice.battery,
            status: 'connected',
            location: {
              lat: mobileDevice.location.lat,
              lng: mobileDevice.location.lng,
            }
          })
        }).then(function(response) {
          mobileDevice.status = "connected";
          toggle(mobileDevice.status);
        })
        .catch(function(){
          mobileDevice.status = 'disconnected';
          toggle(mobileDevice.status);
        });
      }

        mobileDevice.type = device.platform;
        mobileDevice.model = device.manufacturer;
        getIMEICode();
        getLocation();
        getSignal();

      setTimeout(function(){
          showData();
      }, 5000);
        
      setInterval(function(){
        getLocation();
        getSignal();
        showData();
        sendData();
      }, 90000);
    },

    receivedEvent: function() {
    },
  };
  function saveIP(){
    var $ip = document.getElementById('ip-input');
    if($ip.value){
      serverEndpoint = $ip.value.trim();
      $ip.value = "";
    }
  }
  function toggle(){
    var $status = document.getElementById('status');
    if(arguments.length){
      $status.innerText = arguments[0] ? ("Connected " + serverEndpoint) : "Disconnected";
      return;
    } 
    
    isProgramSendData = !isProgramSendData;
    event.target.value = isProgramSendData ? "Disconnect" : "Connect to last IP";
    $status.innerText = isProgramSendData ? "Connected" : "Disconnected";
  }
  app.initialize();
