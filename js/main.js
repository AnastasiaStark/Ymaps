const container = document.querySelector('#map');
const interactiveMap = require('./Map')
const events = require('./events')
ymaps.ready(init);

function init() {
const customBalloonTemplate = document.getElementById('customBalloonTemplate').innerHTML;
const balloonTemplate = ymaps.templateLayoutFactory.createClass(customBalloonTemplate);

ymaps.layout.storage.add('my#customBalloonLayout',balloonTemplate);

  interactiveMap.geoLocation()
    .then (function (coords) {
    container.innerHTML = "";
    ymaps.map = new ymaps.Map(container, {
      center: coords,
      zoom: 12,
      controls: ['zoomControl'],
      behavior: ['drag']
    });

  interactiveMap.clusterer();
  ymaps.clusterer.add(new ymaps.Placemark(coords))
      ymaps.clusterer.add(new ymaps.Placemark([55.8578,37.4285]))
  events.click();
    });
}
