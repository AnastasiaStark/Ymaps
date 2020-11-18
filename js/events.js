function OnMapClick () {
  console.log('onMapClick');
}

function OnGeoObjectsClick () {
  console.log('OnGeoObjectsClick');
}

function onDomClick () {
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
