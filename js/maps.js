//initialize map
var map = L.map('map', {scrollWheelZoom:false, preferCanvas:true}).setView([50.4501, 30.5234], 13);


// add base map
var CartoDB_PositronNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="http://cartodb.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 16
      }).addTo(map);


var Stamen_TonerLabels = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}', {
          attribution: '<a href="http://stamen.com">Stamen Design</a>',
          subdomains: 'abcd',
          minZoom: 15,
          maxZoom: 16,
          ext: 'png'
        }).addTo(map);


//fly to city of choice
$('#kyiv').on('click', function (e) { map.flyTo(L.latLng(50.4501, 30.5234), 12);})
$('#kharkiv').on('click', function (e) { map.flyTo(L.latLng(49.9935, 36.2304), 12);})
$('#dnipro').on('click', function (e) { map.flyTo(L.latLng(48.4647, 35.0462), 12); })
$('#odesa').on('click', function (e) { map.flyTo(L.latLng(46.460454, 30.704336), 13);})
$('#lviv').on('click', function (e) { map.flyTo(L.latLng(49.8397, 24.0297), 14);})

//set active button, set bounds for current city
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
    fillOpacity: 0.6
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

  loadKharkiv = function(){};
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

  loadDnipro = function(){};

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

  loadOdesa = function(){};

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

  loadLviv = function(){};
 }


//add infowindow

//data for infowindow
var panel = [{"city":"Київ","population":2.91,"licenses":7247,"percapita":249.2,"description":"Київ є абсолютним лідером серед міст за кількістю ліцензій на роздрібний продаж алкоголю. Ми не були впевнені в цьому на старті проекту, коли дані ДФС показували, що в столиці всього лише 1840 ліцензій. Але невдовзі після нашої публікації про Київ податкова оновила свої дані та надала повний список ліцензій."},
{"city":"Харків","population":1.44,"licenses":2107,"percapita":115.0,"description":"Харків є другим після Києва найбільшим містом України, але за кількістю ліцензій на продаж алкоголю посідає лише четверте місце. Є підозра, що тут багато торгують без ліцензії, або ж місцева ДФС викладає не всі дані"},
{"city":"Дніпро","population":0.98,"licenses":1658,"percapita":169.1,"description":"Дніпро є четвертим в Україні містом за кількістю населення, а за кількістю ліцензій на продаж алкоголю — на п’ятому місці"},
{"city":"Одеса","population":1.01,"licenses":2452,"percapita":242.6,"description":"Одеса посідає третє місце за кількістю ліцензій на продаж алкоголю, впритул наближаючись до Львова. Пояснення великої кількості точок продажу алкоголю аналогічне — туризм"},
{"city":"Львів","population":0.76,"licenses":2474,"percapita":326.2,"description":"Львів, попри те, що є далеко не найбільшим містом України, посідає друге місце за кількістю ліцензій на продаж алкоголю і перше місце за кількістю ліцензій на 100 тисяч населення. Пояснення просте — тут дуже багато маленьких закладів, орієнтованих на туристів"}];

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

  div.innerHTML += '<h4 id ="city">Київ</h4> <p id="description"> Київ є абсолютним лідером серед міст за кількістю ліцензій на роздрібний продаж алкоголю. Ми не були впевнені в цьому на старті проекту, коли дані ДФС показували, що в Києві всього лише 1840 ліцензій. Але невдовзі після нашої публікації про Київ податкова оновила свої дані та надала повний список ліцензій</p> <hr> <p>Населення: <b id="population">2.91</b> млн осіб</p> <p>Кількість ліцензій: <b id="licenses"> 7247</b></p> <p>Ліцензій на 100 тис. населення: <b id="percapita"> 249.2</b></p> <hr>';

return div;
};

map.addControl(info);

var southWest = L.latLng(44.390411, 22.128811),
    northEast = L.latLng(52.375359, 40.218079),
    bounds = L.latLngBounds(southWest, northEast);

var search = new L.Control.OSMGeocoder({
        collapsed: false,
        position: 'topright',
        text: 'Шукати!',
        bounds: bounds
      });

// change active button and panel on search results

map.on('moveend', function() {

  var center = map.getCenter();

  var kyiv = L.latLngBounds(L.latLng(50.2193, 30.0000), L.latLng(50.6319, 30.8296));
  var kharkiv = L.latLngBounds(L.latLng(49.8891, 36.0661), L.latLng(50.0670, 36.4302));
  var dnipro = L.latLngBounds(L.latLng(48.3338, 34.8508), L.latLng(48.5880, 35.2137));
  var odesa = L.latLngBounds(L.latLng(46.3616, 30.5991), L.latLng(46.5769, 30.8081));
  var lviv = L.latLngBounds(L.latLng(49.7813 , 23.9246), L.latLng(49.8975, 24.1388));


  if (kyiv.contains(center)) {

    $('.btn-group .btn#kyiv').addClass('active').siblings().removeClass('active');

    changeText(0);

  } else if (kharkiv.contains(center)) {

    $('.btn-group .btn#kharkiv').addClass('active').siblings().removeClass('active');

    changeText(1);

    loadKharkiv();

  } else if (dnipro.contains(center)) {

    $('.btn-group .btn#dnipro').addClass('active').siblings().removeClass('active');

    changeText(2);

    loadDnipro();

  } else if (odesa.contains(center)) {

    $('.btn-group .btn#odesa').addClass('active').siblings().removeClass('active');

    changeText(3);

    loadOdesa();

  } else if (lviv.contains(center)) {

    $('.btn-group .btn#lviv').addClass('active').siblings().removeClass('active');

    changeText(4);

    loadLviv();

  }

});


map.addControl(search);

map.zoomControl.setPosition('topright')
