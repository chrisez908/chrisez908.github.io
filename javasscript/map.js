
  //var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  var mymap = L.map('mapid');
  // var options = {
  //   key: 'cb6194a881934bf5a6cdf9adc347c879',
  //   limit: 10
  // };
  // var geosearchControl =
  // L.Control.openCageGeosearch(options).addTo(mymap);
  L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  id: 'mapbox/navigation-day-v1',
  accessToken: mapbox_access_token,
  }).addTo(mymap);



  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token = {accessToken}',
  // {
  //   maxZoom: 18,
  //   id:'mapbox/mapbox-traffic-v1',
  //   accessToken:'pk.eyJ1IjoiY2V6MTYiLCJhIjoiY2w4eGNtdWFkMDVldDNvcGNuOTk0a3ZjeiJ9.u4DpCO8MWNsOWtt35ZCCzw'
  //
  // }).addTo(mymap);



  // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
  //  {}).addTo(mymap);
     var marker = L.marker([51.5, -0.09]).addTo(mymap);
       marker.bindPopup("<b>Hello world!</b><br>I am a pop-up.").openPopup();
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
