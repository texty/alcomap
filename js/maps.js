//initialize map
var map = L.map('map', {scrollWheelZoom:false}).setView([50.4501, 30.5234], 13);
            map.zoomControl.setPosition('topright')

// add base map
var CartoDB_PositronNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="http://cartodb.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 17
      }).addTo(map);


//fly to city of choice
$('#kyiv').on('click', function (e) { map.flyTo(L.latLng(50.4501, 30.5234), 12);})
$('#kharkiv').on('click', function (e) { map.flyTo(L.latLng(49.9935, 36.2304), 12);})
$('#dnipro').on('click', function (e) { map.flyTo(L.latLng(48.4647, 35.0462), 12); })
$('#odesa').on('click', function (e) { map.flyTo(L.latLng(46.460454, 30.704336), 13);})
$('#lviv').on('click', function (e) { map.flyTo(L.latLng(49.8397, 24.0297), 13);})

//set active button
$('.btn-group .btn').click( function() {
$(this).addClass('active').siblings().removeClass('active');
  });

function style(feature) {
  return {
    radius: 3,
    fillColor: '#A80858',
    color: '#FEFFEA',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7
    };
  }

//add kyiv data
  $.getJSON("data/kyiv.geojson", function(data){

      L.geoJson(data, {
            pointToLayer: function(feature, latlng){
              return L.circleMarker(latlng, style(feature));
             },
             onEachFeature: function (feature, layer) {
               layer.bindPopup('<b>' + feature.properties.name.toUpperCase() + '</b>' + '<br><hr>' + feature.properties.address + '<br>' + 'ліцензія: ' + feature.properties.number + '<br>' + 'дійсна до ' + feature.properties.to);
             }
           }).addTo(map);
  });

 // load data on click

 //kharkiv

 kharkivBtn = document.getElementById('kharkiv');

 kharkivBtn.addEventListener("click", loadKharkiv)

 function loadKharkiv() {

   $.getJSON("data/kharkiv.geojson", function(data){

       L.geoJson(data, {
             pointToLayer: function(feature, latlng){
               return L.circleMarker(latlng, style(feature));
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup('<b>' + feature.properties.name.toUpperCase() + '</b>' + '<br><hr>' + feature.properties.address + '<br>' + 'ліцензія: ' + feature.properties.number + '<br>' + 'дійсна до ' + feature.properties.to);
              }
            }).addTo(map);
   });

  kharkivBtn.removeEventListener("click", loadKharkiv);
 }

//dnipro

 dniproBtn = document.getElementById('dnipro');

 dniproBtn.addEventListener("click", loadDnipro)

 function loadDnipro() {

   $.getJSON("data/dnipro.geojson", function(data){

       L.geoJson(data, {
             pointToLayer: function(feature, latlng){
               return L.circleMarker(latlng, style(feature));
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup('<b>' + feature.properties.name.toUpperCase() + '</b>' + '<br><hr>' + feature.properties.address + '<br>' + 'ліцензія: ' + feature.properties.number + '<br>' + 'дійсна до ' + feature.properties.to);
              }
            }).addTo(map);
   });

  dniproBtn.removeEventListener("click", loadDnipro);
 }

//odesa

 odesaBtn = document.getElementById('odesa');

 odesaBtn.addEventListener("click", loadOdesa)

 function loadOdesa() {

   $.getJSON("data/odesa.geojson", function(data){

       L.geoJson(data, {
             pointToLayer: function(feature, latlng){
               return L.circleMarker(latlng, style(feature));
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup('<b>' + feature.properties.name.toUpperCase() + '</b>' + '<br><hr>' + feature.properties.address + '<br>' + 'ліцензія: ' + feature.properties.number + '<br>' + 'дійсна до ' + feature.properties.to);
              }
            }).addTo(map);
   });

  odesaBtn.removeEventListener("click", loadOdesa);
 }

//lviv

 lvivBtn = document.getElementById('lviv');

 lvivBtn.addEventListener("click", loadLviv)

 function loadLviv() {

   $.getJSON("data/lviv.geojson", function(data){

       L.geoJson(data, {
             pointToLayer: function(feature, latlng){
               return L.circleMarker(latlng, style(feature));
              },
              onEachFeature: function (feature, layer) {
                layer.bindPopup('<b>' + feature.properties.name.toUpperCase() + '</b>' + '<br><hr>' + feature.properties.address + '<br>' + 'ліцензія: ' + feature.properties.number + '<br>' + 'дійсна до ' + feature.properties.to);
              }
            }).addTo(map);
   });

  lvivBtn.removeEventListener("click", loadLviv);
 }


//add infowindow

//data for infowindow
var panel = [{"city":"Київ","population":2.91,"licenses":7247,"percapita":249.2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
{"city":"Харків","population":1.44,"licenses":2107,"percapita":115.0,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
{"city":"Дніпро","population":0.98,"licenses":1658,"percapita":169.1,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
{"city":"Одеса","population":1.01,"licenses":2452,"percapita":242.8,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
{"city":"Львів","population":0.76,"licenses":2474,"percapita":326.2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}];

//change infowindow text
function changeText(index) {

  document.getElementById("city").innerHTML = panel[index].city;
  document.getElementById("population").innerHTML =  panel[index].population;
  document.getElementById("description").innerHTML =  panel[index].description;
  document.getElementById("licenses").innerHTML =  panel[index].licenses;
  document.getElementById("percapita").innerHTML =  panel[index].percapita;

}

var info = new L.control({position: 'topleft'});

info.onAdd = function(map) {

  var div = L.DomUtil.create('div', 'info hidden-xs hidden-sm');

  div.innerHTML += '<h4 id ="city">Київ</h4> <p id="description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> <hr> <p>Населення: <b id="population">2.91</b> млн осіб</p> <p>Кількість ліцензій: <b id="licenses"> 7247</b></p> <p>Ліцензій на 100 тис. населення: <b id="percapita"> 249.2</b></p> <hr>';

return div;
};

map.addControl(info);

//add legend for small screens
// var legend = L.control({position: 'bottomleft'});
//
// legend.onAdd = function (map) {
//     var div = L.DomUtil.create('div', 'legend hidden-lg hidden-md');
//
//         div.innerHTML += '<i class="fa fa-circle" aria-hidden="true" style="color:#d3c756; margin-right:5px"> </i> супермаркети <br><i class="fa fa-circle" aria-hidden="true" style="color:#327C8C; margin-right:5px";> </i> місця з ліцензією';
//
//     return div;
//     };
//
// map.addControl(legend);
