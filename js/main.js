// const container = document.querySelector('#map');
//
//
//   yamaps.map = new ymaps.Map(container, {
//     center: [55.69, 37.63],
//     zoom: 12,
//     controls: ['zoomControl'],
//     behaviors: ['drag']
//   });

ymaps.ready(init);

function init() {
  let map = new ymaps.Map('map', {
    center: [55.69, 37.63],
    zoom: 12,
  });
}
