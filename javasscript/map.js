// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var mymap = L.map('mapid');
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'blackmarker.jpg',
    iconSize: [38, 95],
    iconAnchor: [27.17, 78.04],
    popupAnchor: [27.17, 78.04]})

var Taj = L.marker([27.17, 78.04]).addTo(mymap);
  marker.bindPopup("India's Taj Mahal").openPopup();
  marker.on('click', function(e)
  {
    mymap.setView(e.latlng, 14);
  })
  var Great_Wall = L.marker([40.33, 116.48]).addTo(mymap);
    marker.bindPopup("Great Wall China").openPopup();
    marker.on('click', function(e)
    {
      mymap.setView(e.latlng, 14);
    })
    var Petra_In_Jordan = L.marker([30.32, 35.44]).addTo(mymap);
       marker.bindPopup("Petra in Jordan").openPopup();
       marker.on('click', function(e)
       {
         mymap.setView(e.latlng, 14);
       })
        var BrazilChrist = L.marker([-22.95, -43.21]).addTo(mymap);
          marker.bindPopup("Brazil's Statue of Christ the Redeemer").openPopup();
          marker.on('click', function(e)
          {
            mymap.setView(e.latlng, 14);
          })
          var MacchuPichu = L.marker([-13.16, -72.55]).addTo(mymap);
            marker.bindPopup("Peru's Macchu Picchu").openPopup();
            marker.on('click', function(e)
            {
              mymap.setView(e.latlng, 14);
            })
            var ChichenItza = L.marker([20.68, -88.57]).addTo(mymap);
              marker.bindPopup("Chichen Itza Pyramid").openPopup();
              marker.on('click', function(e)
              {
                mymap.setView(e.latlng, 14);
              })
              var Colosseum = L.marker([41.89, 12.49]).addTo(mymap);
                marker.bindPopup("The Colosseum in Rome").openPopup();
                marker.on('click', function(e)
                {
                  mymap.setView(e.latlng, 14);
                })
var circle = L.circle([51.508, -0.11],
  {
    color: 'red',
   fillColor: '#f03',
   FillOpacity: 0.5,
   radius: 500
 })
 .addTo(mymap);
 circle.bindPopup("I am a circle.");
 circle.on('click', function(e)
 {
   mymap.setView(e.latlng, 13);
 })
 var polygon = L.polygon([
 [51.509, -0.08],
 [51.503, -0.06],
 [51.51, -0.047]
 ]).addTo(mymap);
polygon.bindPopup("I am a polygon.");
polygon.on('click', function(e)
{
 mymap.setView(e.latlng, 13);
})
var polyline = L.polyline([
       [51.506, -0.08],
       [51.502, -0.06],
       [51.507, -0.047],
     ]).addTo(mymap);
var ZoomViewer = L.Control.extend({onAdd: function()
 {
   var gauge = L.DomUtil.create('div');
   gauge.style.width = '200px';
   gauge.style.background = 'rgba(255,255,255,0.5)';
   gauge.style.textAlign = 'left';
   mymap.on('zoomstart zoom zoomend', function(ev)
   {
   gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
 })
 return gauge;
}
});
(new ZoomViewer).addTo(mymap);
mymap.setView([0,0], 1);
