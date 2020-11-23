

function geoLocation () {
  return new Promise(function (resolve) {
    ymaps.geolocation.get({provider: 'auto'})
        .then(function (result) {
        resolve(result.geoObjects.position);
      });
    })
  }
function openBalloon (coords) {
  ymaps.map.balloon.open(coords, 'Загрузка..', { closeButton: false });


  // const comments = api.getPlacmark(coords);
  geoCoder(coords)
    .then(function (address) {
      const data = {
        address,
        coords,
        comments: [
    { name: 'Сергей Мелюков', place: 'Красный куб', date: '12.12.2015', text: 'Ужасное место! Кругом зомби!!!!' },
    { name: 'svetlana', place: 'Шоколадница', date: '13.12.2015', text: 'Очень хорошее место!' },
    { name: 'Stelios Baglaridis', place: 'Кафе-бар "Calypso"', date: '20.10.2019', text: 'Очень хорошее место!' },
        ]
      };


      ymaps.map.balloon.open(coords, data, { layout: 'my#customBalloonLayout' });
    });

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
    const coords = placemark.split(",");
    const data = placemarks[placemark];

    ymaps.clusterer.add(new ymaps.Placemark(coords, data, placemarkIcon))
  }
}

function map (coords, container) {
  container.innerHTML = "";

  ymaps.map = new ymaps.Map(container, {
    center: coords,
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });
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
  geoCoder,
  createPlacemarks,
  map
}
