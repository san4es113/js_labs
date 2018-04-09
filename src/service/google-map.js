export class GoogleMap {
  /**
   * Generate new map
   * @param {string} id - selector id of container for map 
   * @param {[]} buttons - array of buttons obj for map
   */
  constructor(id, buttons){
    this.map = new google.maps.Map(document.getElementById(id), {
      zoom: 17,
      center: {lat: 49.83476128325918, lng: 24.01436448097229},
      mapTypeId: 'terrain',
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
    });
    this.areas = [];
    this.markers = [];

    buttons.array.forEach( b => this.createGoogleBtn(b));
    
    google.maps.event.addListener(map,'click',e => {
      alert(`${e.latLng.lat()}+++${e.latLng.lng()}`);
    });
  }

  /**
   * Add button to map
   * @param {{}} button - params for button 
   * @field {string} id -- css id selector
   * @field {string} title  -- tooltip text
   * @field {string} background -- css style for background
   * @param {function} clickCallback
   */
   createGoogleBtn(button,clickCallback) {
    const $btn = document.createElement('div');
      const controlUI = document.createElement('button');
      controlUI.style.background = button.background
      controlUI.style.backgroundSize = 'cover';
      controlUI.style.backgroundColor = 'rgba(25,25,25,.2)';
      controlUI.style.width = controlUI.style.height = '60px';
      controlUI.id = button.id;
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '5px';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = button.title;
      $btn.appendChild(controlUI);
    
      const controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = '';
      controlUI.appendChild(controlText);
    
      if(clickCallback){
        controlUI.addEventListener('click', clickCallback);
      }

    map.controls[google.maps.ControlPosition.LEFT_TOP].push($btn);
  }

  /**
   * Create marker on map
   * @param {{}} options - params for marker 
   * @field {string} id
   * @field {string} title - text for tooltip 
   * @field {string} icon -- url to image
   * @field {float} lat - location lat
   * @field {float} lng  - location lng
   * @field {string} contentString - html in string for info-window
   */
  setMarker(options){
    const icon = {
      url: options.icon,
      scaledSize: new google.maps.Size(30, 30),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(15, 30)
    };
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(options.lat,options.lng),
      map: this.map,
      icon: icon,
      title: options.title
    });

    this.markers.push(marker);

    marker.addListener('click',()=>{
      const infowindow = new google.maps.InfoWindow({
        content: options.contentString || ''
      });
    });
    //infowindow.open(this.map,this);//how to use this in open method???
  }

  /**
   * Insert circle to map
   * @param {object} circle --params for circle
   * @field {float} lat
   * @field {float} lng
   * @field {number} radius -- in meters 
   */
  setCircle(circle){
    const area = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.2,
      strokeWeight: 1,
      fillColor: '#FF8700',
      fillOpacity: 0.35,
      map: this.map,
      center: new google.maps.LatLng(circle.lat, circle.lng),
      radius: circle.radius
    });
    this.areas.push(area);
  }

  /** 
   * Destroy all markers and circle from map
  */
  clearMap(){
    this.areas.array.forEach( a => {
      a.setMap(null);
    });
    this.markers.array.forEach( m => {
      m.setMap(null);
    });
    this.areas = [];
    this.markers = [];
  }
  
  /**
   *  Calc distance between two points
   * @param {{}} pointA 
   * @field lat
   * @field lng
   * @param {{}} pointB
   * @field lat
   * @field lng 
   * @returns {number} distance in meters
   */
  getDistance(pointA, pointB){
    return google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(pointA.lat, pointA.lng), new google.maps.LatLng(pointB.lat, pointB.lng));
  }

}