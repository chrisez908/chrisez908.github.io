// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// // var mymap = L.map('mapid');
//
// // L.tileLayer(
// // 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// // id: 'mapbox/navigation-day-v1',
// // accessToken: mapbox_access_token,
// // }).addTo(mymap);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// }).addTo(mymap);
// id: 'mapbox.mapbox-traffic-v1',
// accessToken: mapbox_access_token
// }).addTo(mymap);
// var marker = L.marker([27.17, 78.04]).addTo(mymap);
//   marker.bindPopup("Taj Mahal").openPopup();
//   marker.on('click', function(e)
//   {
//     mymap.setView(e.latlng, 14);
//   })
//   var Wall = L.marker([40.33, 116.48]).addTo(mymap);
//     marker.bindPopup("Great Wall China").openPopup();
//     marker.on('click', function(e)
//     {
//       mymap.setView(e.latlng, 14);
//     })
//     var Petra = L.marker([30.32, 35.44]).addTo(mymap);
//        marker.bindPopup("Petra").openPopup();
//        marker.on('click', function(e)
//        {
//          mymap.setView(e.latlng, 14);
//        })
//         var BrazilChrist = L.marker([-22.95, -43.21]).addTo(mymap);
//           marker.bindPopup("Brazil Christ").openPopup();
//           marker.on('click', function(e)
//           {
//             mymap.setView(e.latlng, 14);
//           })
//           var MacchuPichu = L.marker([-13.16, -72.55]).addTo(mymap);
//             marker.bindPopup("MacchuPichu").openPopup();
//             marker.on('click', function(e)
//             {
//               mymap.setView(e.latlng, 14);
//             })
//             var ChichenItza = L.marker([20.68, -88.57]).addTo(mymap);
//               marker.bindPopup("ChichenItza").openPopup();
//               marker.on('click', function(e)
//               {
//                 mymap.setView(e.latlng, 14);
//               })
//               var Colosseum = L.marker([41.89, 12.49]).addTo(mymap);
//                 marker.bindPopup("Colosseum").openPopup();
//                 marker.on('click', function(e)
//                 {
//                   mymap.setView(e.latlng, 14);
//                 })
// var circle = L.circle([51.508, -0.11],
//   {
//     color: 'red',
//    fillColor: '#f03',
//    FillOpacity: 0.5,
//    radius: 500
//  })
//  .addTo(mymap);
//  circle.bindPopup("I am a circle.");
//  circle.on('click', function(e)
//  {
//    mymap.setView(e.latlng, 13);
//  })
//  var polygon = L.polygon([
//  [51.509, -0.08],
//  [51.503, -0.06],
//  [51.51, -0.047]
//  ]).addTo(mymap);
// polygon.bindPopup("I am a polygon.");
// polygon.on('click', function(e)
// {
//  mymap.setView(e.latlng, 13);
// })
// var polyline = L.polyline([
//        [51.506, -0.08],
//        [51.502, -0.06],
//        [51.507, -0.047],
//      ]).addTo(mymap);
// var ZoomViewer = L.Control.extend({onAdd: function()
//  {
//    var gauge = L.DomUtil.create('div');
//    gauge.style.width = '200px';
//    gauge.style.background = 'rgba(255,255,255,0.5)';
//    gauge.style.textAlign = 'left';
//    mymap.on('zoomstart zoom zoomend', function(ev)
//    {
//    gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
//  })
//  return gauge;
// }
// });
// (new ZoomViewer).addTo(mymap);
// mymap.setView([0,0], 1);
