

function geoLocation () {
  return new Promise(function (resolve) {
    ymaps.geolocation.get({provider: 'auto'})
        .then(function (result) {
        resolve(result.geoObjects.position);
      });
    })
  }
function openBalloon (coords) {
  ymaps.map.balloon.open(coords, 'Загрузка...', { closeButton: false });

  // const comments = api.getPlacmark(coords);
  const address = geoCoder(coords);
  const data = {
    address,
    coords
  };


  ymaps.map.balloon.open(coords, data, { layout: 'my#customBalloonLayout' });
}

function clusterer () {
  ymaps.clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: true,
    clusterOpenBalloonOnClick: true,
    clusterBalloonContentLayout: 'cluster#balloonCarousel',
    // clusterBalloonItemContentLayout: 'my#clustererItemLayout',
  });


ymaps.map.geoObjects.add(ymaps.clusterer)
}
function createPlacemarks (placemarks = {}) {
  for (let placemark in placemarks) {
    // const coords = placemark.split(",");
    const data = placemarks [placemark];

    ymaps.clusterer.add(new ymaps.Placemark(coords))
  }
}

function geoCoder (coords) {
  return new Promise(function (resolve) {
  new ymaps.geocode(coords, { results: 1 })
    .then(function (result) {
      resolve(result.geoObjects.get(0).properties.get('name'))
    });
  })
}

module.exports = {
  geoLocation,
  clusterer,
  openBalloon,
  geoCoder
}
