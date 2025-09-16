var map = L.map('map');
map.setView([4.628024660207178, -74.06586550974782],15);
var urlMap='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
var config={
    maxZoim: 19
}

var layer= L.titleLayer(urlMap, config);
layer.addTo(map);

async function leerGeoJSON(url){
    var response=fetch(url);
    return (await response).json();
}
var myfile = leerGeoJSON('map.geojson');

const geoLayer = L.leerGeoJSON(myfile);
geoLayer.addTo(map);