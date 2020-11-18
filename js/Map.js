async function geoLocation () {
  const result = ymaps.geolocation.get( {provider:'auto'} );
  return result.geoObjects.position;
}

ymaps.clusterer = new ymaps.Clusterer({
  clusterDisableClickZoom: true,
  clusterOpenBalloonOnClick: false,
  clusterBalloonContentLayout: 'cluster#balloonCarousel',
  clusterBalloonItemContentLayout: 'my#clustererItemLayout',
});

ymaps.map.geoObjects.add(ymaps.clusterer)

// function createPlacemarks (placemarks = {}) {
//   for (let placemark in placemarks) {
//     // const coords = placemark.split(",");
//     const data = placemarks [placemark];
//
//     ymaps.clusterer.add(new ymaps.Placemark(coords))
//   }
// }
module.exports = {
  geoLocation,
  clusterer
}
