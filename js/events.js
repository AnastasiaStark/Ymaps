const interactiveMap = require('./Map')

function OnMapClick (e) {
  console.log('onMapClick');
}

function OnGeoObjectsClick (e) {
  const target = e.get('target');
  const coords = target.geometry.getCoordinates();
  const geoObjects = target.properties.get('geoObjects');

  if(!geoObjects) {
    interactiveMap.openBalloon(coords);
  }

  console.log('OnGeoObjectsClick');
}

function onDomClick (e) {
  console.log('onDomClick');
}

function click () {
ymaps.map.events.add('click', OnMapClick);
ymaps.map.geoObjects.events.add('click', OnGeoObjectsClick);
document.body.addEventListener('click', onDomClick);
}


module.exports = {
click
}
