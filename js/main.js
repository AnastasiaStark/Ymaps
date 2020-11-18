const container = document.querySelector('#map');
const interactiveMap = require('./Map')
const events = require('./events')
ymaps.ready(init);

function init() {
  const coords = interactiveMap.geoLocation();
  container.innerHTML="";
  ymaps.map = new ymaps.Map(container, {
    center: [55.69, 37.63],
    zoom: 12,
    controls: ['zoomControl'],
    behavior: ['drag']
  });
  Map.clusterer();

  events.click();
}
